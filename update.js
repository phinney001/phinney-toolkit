const fs = require('fs')
const path = require('path')


class Update {
  constructor() {
    this.basePath = path.join(__dirname, 'src')
    this.indexTsPath = path.join(this.basePath, 'index.ts')
    this.readmePath = path.join(__dirname, 'README.md')
    this.folderList = fs.readdirSync(this.basePath, 'utf-8')
  }

  // 更新index.ts
  updateIndexTs() {
    console.log('正在更新index.ts...')
    const indexTsString = this.folderList.reduce((t, f) => {
      if (f === 'index.ts') return t
      return t += `export * from './${f}'\n`
    }, '')
    fs.writeFileSync(this.indexTsPath, indexTsString, 'utf-8')
    console.log('更新成功!')
  }

  // 更新readme
  updateReadme() {
    console.log('正在更新README.md...')
    let readmeString = fs.readFileSync(this.readmePath, 'utf-8')
    this.folderList.forEach((f) => {
      if (!['storage', 'index.ts'].includes(f)) {
        const fileString = fs.readFileSync(path.join(this.basePath, `${f}/index.ts`), 'utf-8')
        const fileTitle = fileString.match(/(?<=\/\*\* @title ).*?(?= \*\/)/g)
        const nameList = fileString.match(/(?<=export const ).*?(?= =)/g)
        const titleList = fileString.match(/(?<=\/\*\*\r\n \* ).*?(?=\r\n)/g)
        if (!readmeString.includes(`\r\n## ${f}`)) {
          readmeString = `${readmeString}\r\n## ${f} ${fileTitle}\r\n`
        }
        titleList.forEach((title, tIndex) => {
          if (!readmeString.includes(`#### ${title}`)) {
            const lineStartIndex = readmeString.indexOf(`## ${f} ${fileTitle}`)
            let lineEndIndex = readmeString.indexOf('\r\n## ', lineStartIndex + 2)
            lineEndIndex = lineEndIndex = lineEndIndex === -1 ? readmeString.length : lineEndIndex
            const matchString = readmeString.substring(lineStartIndex, lineEndIndex)
            const funcString = fileString.match(new RegExp(`(?<=export const ${nameList[tIndex]} = ).*?(?= => {)`))
            readmeString = readmeString.replace(matchString, `${matchString}#### ${title}\r\n\`\`\`javascript\r\n${nameList[tIndex]}: ${funcString[0].replace('):', ') =>')}\r\n\`\`\`\r\n`)
          }
        })
      }
    })
    fs.writeFileSync(this.readmePath, readmeString, 'utf-8')
    console.log('更新成功!')
  }

  // 运行
  start() {
    this.updateIndexTs()
    this.updateReadme()
  }
}

const update = new Update()
update.start()
