export const regexStringToken = '__papupata_regex_string' as const
export const StringMatching = (regex: RegExp) => ({ type: regexStringToken, regex })

export const integerToken = '__papupata_integer' as const
export const Integer = { type: integerToken }

export const stringEnumToken = '__papupata_string_enum' as const
export const StringEnum = <T extends readonly string[]>(values: T) => ({ type: stringEnumToken, values })
