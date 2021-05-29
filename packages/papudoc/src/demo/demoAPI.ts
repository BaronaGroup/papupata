import { APIDeclaration, papudoc } from 'papupata'
import { Integer, StringEnum, StringMatching } from '@papupata/common-types'

const base = new APIDeclaration<any>()

export const apis = {
  basic: base.declareGetAPI('/index.html').response<string>(),
  query: {
    legacy: base
      .declareGetAPI('/api2')
      .query(['required'] as const)
      .optionalQuery(['optional'] as const)
      .queryBool(['bool'] as const)
      .response<string>(),

    // corrensponds to the api above
    legacyModernised: base
      .declareGetAPI('/api3')
      .query({ required: String, bool: Boolean })
      .optionalQuery({ optional: String })
      .response<string>(),

    allTypes: {
      basicTypes: base
        .declareGetAPI('/basicTypes')
        .query({
          string: String,
          number: Number,
          boolean: Boolean,
          date: Date,
        })
        .response<string>(),
      basicTypeArrays: base
        .declareGetAPI('/basicTypeArrays')
        .query({
          string: [String],
          number: [Number],
          boolean: [Boolean],
          date: [Date],
        })
        .response<string>(),

      subsets: base
        .declareGetAPI('/subsetTypes')
        .query({
          regex: StringMatching(/abc/),
          integer: Integer,
          enum: StringEnum(['a', 'b'] as const),
        })
        .response<string>(),

      subsetArrays: base
        .declareGetAPI('/subsetTypeArrays')
        .query({
          regex: [StringMatching(/abc/)],
          integer: [Integer],
          enum: [StringEnum(['a', 'b'] as const)],
        })
        .response<string>(),
    },
  },
}

papudoc(apis)
