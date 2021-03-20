export const regexStringToken = '__papupata_regex_string' as const
export const StringMatching = (regex: RegExp) => ({ type: regexStringToken, regex })
