import * as _edata from 'exupery-core-data'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _in from "../../generated/interface/schemas/rex/data_types/source"
import * as _out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Grammar: _ea.Guaranteed_Transformation_Without_Parameters<_in.Grammar, _out.Block> = (
    $
) => {
    return sh.block([
        $.prolog,
        $['syntax definition'],
        $['lexical definition'],
        $.encore,
    ])
}