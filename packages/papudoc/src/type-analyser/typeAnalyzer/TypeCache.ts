import ts from 'typescript'
import TSType from './TsType'

interface Entry {
  typeStack: ts.Type[]
  analyzed: TSType
}

export default class TypeCache {
  private entries: Entry[] = []
  //private uniqueNum = 0

  public get(typeStack: ts.Type[]) {
    const match = this.findMatchIndex(typeStack)
    if (match !== -1) return this.entries[match].analyzed
    return null
  }

  public set(typeStack: ts.Type[], value: TSType) {
    const match = this.findMatchIndex(typeStack)
    if (match !== -1) return
    this.entries.push({
      typeStack: typeStack,
      analyzed: value,
    })
    this.ensureUniqueNames()
  }

  private findMatchIndex(typeStack: ts.Type[]) {
    return this.entries.findIndex((entry) => {
      if (entry.typeStack.length !== typeStack.length) return false
      return entry.typeStack.every((t, i) => typeStack[i] === t)
    })
  }

  private ensureUniqueNames() {
    /* let changed = false
    const names = new Set<string>()
    for (const entry of this.entries) {
      const name = entry.analyzed.name
      if (names.has(name)) {
        const newName = name + '_' + ++this.uniqueNum
        entry.analyzed.nameOverride = newName
        changed = true
      } else {
        names.add(name)
      }
    }
    if (changed) this.ensureUniqueNames()*/
  }
}
