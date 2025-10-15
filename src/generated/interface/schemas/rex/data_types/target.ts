import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Char_Class_Option = _i_core._T_State_Group<null, 
    | readonly ['char', string]
    | readonly ['char code', string]
    | readonly ['char code range', {
        readonly 'from': string
        readonly 'to': string
    }]
    | readonly ['char range', {
        readonly 'from': string
        readonly 'to': string
    }]
>

export type _T_Context = {
    readonly 'caret name': string
}

export type _T_Context_Expression = {
    readonly 'lexical sequence': _T_Lexical_Sequence
    readonly 'lookahead': _pt.Optional_Value<_T_Lexical_Item>
}

export type _T_Equivalence_Char_Range = _i_core._T_State_Group<null, 
    | readonly ['char class', _T_Char_Class_Option]
    | readonly ['string literal', string]
>

export type _T_Grammar = {
    readonly 'encore': _pt.Optional_Value<_i_core._T_List<null, _T_Processing_Instruction>>
    readonly 'lexical definition': _pt.Optional_Value<{
        readonly 'lexical rules': _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['equivalence', {
                readonly 'left hand side': _T_Equivalence_Char_Range
                readonly 'look ahead': {
                    readonly 'char class': _T_Char_Class_Option
                }
                readonly 'right hand side': _T_Equivalence_Char_Range
            }]
            | readonly ['lexical production', {
                readonly 'context choice': {
                    readonly 'first': _T_Context_Expression
                    readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                }
                readonly 'name': _i_core._T_State_Group<null, 
                    | readonly ['dot', null]
                    | readonly ['name', string]
                >
                readonly 'non greedy': boolean
                readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
            }]
            | readonly ['lookahead list', {
                readonly 'name': string
                readonly 'names or strings': {
                    readonly 'first': _T_Name_Or_String
                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                }
            }]
            | readonly ['preference', {
                readonly 'base': _T_Name_Or_String
                readonly 'direction': _i_core._T_State_Group<null, 
                    | readonly ['<<', {
                        readonly 'first': _T_Name_Or_String
                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                    }]
                    | readonly ['>>', {
                        readonly 'first': _T_Name_Or_String
                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                    }]
                >
            }]
        >>
    }>
    readonly 'prolog': _i_core._T_List<null, _T_Processing_Instruction>
    readonly 'syntax definition': {
        readonly 'syntax productions': {
            readonly 'first': _T_Syntax_Production
            readonly 'rest': _i_core._T_List<null, _T_Syntax_Production>
        }
    }
}

export type _T_Lexical_Item = {
    readonly 'lexical primary': _i_core._T_State_Group<null, 
        | readonly ['char class', {
            readonly 'items': {
                readonly 'first': _T_Char_Class_Option
                readonly 'rest': _i_core._T_List<null, _T_Char_Class_Option>
            }
            readonly 'negated': boolean
        }]
        | readonly ['char code', string]
        | readonly ['end of input', null]
        | readonly ['name or any character', _i_core._T_State_Group<null, 
            | readonly ['any character ', null]
            | readonly ['name', string]
        >]
        | readonly ['parenthesized', {
            readonly 'lexical choice': {
                readonly 'first': _T_Lexical_Sequence
                readonly 'rest': _i_core._T_List<null, _T_Lexical_Sequence>
            }
        }]
        | readonly ['string literal', string]
    >
    readonly 'quantifier': _pt.Optional_Value<_i_core._T_State_Group<null, 
        | readonly ['more than one', null]
        | readonly ['multiple', null]
        | readonly ['optional', null]
    >>
}

export type _T_Lexical_Sequence = {
    readonly 'first': _T_Lexical_Item
    readonly 'second': _i_core._T_State_Group<null, 
        | readonly ['exclusion', {
            readonly 'what to exclude': _T_Lexical_Item
        }]
        | readonly ['multiple', _i_core._T_List<null, _T_Lexical_Item>]
    >
}

export type _T_Name_Or_String = _i_core._T_State_Group<null, 
    | readonly ['name', {
        readonly 'context': _pt.Optional_Value<_T_Context>
        readonly 'name': string
    }]
    | readonly ['string', {
        readonly 'context': _pt.Optional_Value<_T_Context>
        readonly 'string literal': string
    }]
>

export type _T_Processing_Instruction = {
    readonly 'dir pi contents': string
    readonly 'name': string
}

export type _T_Syntax_Choice = {
    readonly 'first': _T_Syntax_Sequence
    readonly 'rest': _pt.Optional_Value<_i_core._T_State_Group<null, 
        | readonly ['ordered', {
            readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
        }]
        | readonly ['unordered', {
            readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
        }]
    >>
}

export type _T_Syntax_Production = {
    readonly 'name': string
    readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
    readonly 'syntax choice': _T_Syntax_Choice
}

export type _T_Syntax_Sequence = {
    readonly 'items': _i_core._T_List<null, {
        readonly 'quantifier': _pt.Optional_Value<_i_core._T_State_Group<null, 
            | readonly ['*', null]
            | readonly ['+', null]
            | readonly ['?', null]
        >>
        readonly 'syntax primary': _i_core._T_State_Group<null, 
            | readonly ['name or string', _T_Name_Or_String]
            | readonly ['parenthesized', {
                readonly 'syntax choice': _T_Syntax_Choice
            }]
            | readonly ['processing instruction', _T_Processing_Instruction]
        >
    }>
}

export type _T_Whitespace_Option = _i_core._T_State_Group<null, 
    | readonly ['definition', null]
    | readonly ['explicit', null]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Char_Class_Option = _T_Char_Class_Option

export type Context = _T_Context

export type Context_Expression = _T_Context_Expression

export type Equivalence_Char_Range = _T_Equivalence_Char_Range

export type Grammar = _T_Grammar

export type Lexical_Item = _T_Lexical_Item

export type Lexical_Sequence = _T_Lexical_Sequence

export type Name_Or_String = _T_Name_Or_String

export type Processing_Instruction = _T_Processing_Instruction

export type Syntax_Choice = _T_Syntax_Choice

export type Syntax_Production = _T_Syntax_Production

export type Syntax_Sequence = _T_Syntax_Sequence

export type Whitespace_Option = _T_Whitespace_Option

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Char_Class_Option {
    
    export namespace SG {
        export type char = string
        export type char_code = string
        
        export namespace char_code_range {
            export type _from = string
            export type to = string
        }
        export type char_code_range = {
            readonly 'from': string
            readonly 'to': string
        }
        
        export namespace char_range {
            export type _from = string
            export type to = string
        }
        export type char_range = {
            readonly 'from': string
            readonly 'to': string
        }
    }
    export type SG = 
        | readonly ['char', string]
        | readonly ['char code', string]
        | readonly ['char code range', {
            readonly 'from': string
            readonly 'to': string
        }]
        | readonly ['char range', {
            readonly 'from': string
            readonly 'to': string
        }]
}

export namespace _T_Context {
    export type caret_name = string
}

export namespace _T_Context_Expression {
    
    export namespace lexical_sequence {
    }
    export type lexical_sequence = _T_Lexical_Sequence
    
    export namespace lookahead {
        
        export namespace O {
        }
        export type O = _T_Lexical_Item
    }
    export type lookahead = _pt.Optional_Value<_T_Lexical_Item>
}

export namespace _T_Equivalence_Char_Range {
    
    export namespace SG {
        
        export namespace char_class {
        }
        export type char_class = _T_Char_Class_Option
        export type string_literal = string
    }
    export type SG = 
        | readonly ['char class', _T_Char_Class_Option]
        | readonly ['string literal', string]
}

export namespace _T_Grammar {
    
    export namespace encore {
        
        export namespace O {
            
            export namespace L {
            }
            export type L = _T_Processing_Instruction
        }
        export type O = _i_core._T_List<null, _T_Processing_Instruction>
    }
    export type encore = _pt.Optional_Value<_i_core._T_List<null, _T_Processing_Instruction>>
    
    export namespace lexical_definition {
        
        export namespace O {
            
            export namespace lexical_rules {
                
                export namespace L {
                    
                    export namespace SG {
                        
                        export namespace equivalence {
                            
                            export namespace left_hand_side {
                            }
                            export type left_hand_side = _T_Equivalence_Char_Range
                            
                            export namespace look_ahead {
                                
                                export namespace char_class {
                                }
                                export type char_class = _T_Char_Class_Option
                            }
                            export type look_ahead = {
                                readonly 'char class': _T_Char_Class_Option
                            }
                            
                            export namespace right_hand_side {
                            }
                            export type right_hand_side = _T_Equivalence_Char_Range
                        }
                        export type equivalence = {
                            readonly 'left hand side': _T_Equivalence_Char_Range
                            readonly 'look ahead': {
                                readonly 'char class': _T_Char_Class_Option
                            }
                            readonly 'right hand side': _T_Equivalence_Char_Range
                        }
                        
                        export namespace lexical_production {
                            
                            export namespace context_choice {
                                
                                export namespace first {
                                }
                                export type first = _T_Context_Expression
                                
                                export namespace rest {
                                    
                                    export namespace L {
                                    }
                                    export type L = _T_Context_Expression
                                }
                                export type rest = _i_core._T_List<null, _T_Context_Expression>
                            }
                            export type context_choice = {
                                readonly 'first': _T_Context_Expression
                                readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                            }
                            
                            export namespace name {
                                
                                export namespace SG {
                                    export type dot = null
                                    export type name = string
                                }
                                export type SG = 
                                    | readonly ['dot', null]
                                    | readonly ['name', string]
                            }
                            export type name = _i_core._T_State_Group<null, 
                                | readonly ['dot', null]
                                | readonly ['name', string]
                            >
                            export type non_greedy = boolean
                            
                            export namespace options {
                                
                                export namespace L {
                                }
                                export type L = _T_Whitespace_Option
                            }
                            export type options = _i_core._T_List<null, _T_Whitespace_Option>
                        }
                        export type lexical_production = {
                            readonly 'context choice': {
                                readonly 'first': _T_Context_Expression
                                readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                            }
                            readonly 'name': _i_core._T_State_Group<null, 
                                | readonly ['dot', null]
                                | readonly ['name', string]
                            >
                            readonly 'non greedy': boolean
                            readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
                        }
                        
                        export namespace lookahead_list {
                            export type name = string
                            
                            export namespace names_or_strings {
                                
                                export namespace first {
                                }
                                export type first = _T_Name_Or_String
                                
                                export namespace rest {
                                    
                                    export namespace L {
                                    }
                                    export type L = _T_Name_Or_String
                                }
                                export type rest = _i_core._T_List<null, _T_Name_Or_String>
                            }
                            export type names_or_strings = {
                                readonly 'first': _T_Name_Or_String
                                readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                            }
                        }
                        export type lookahead_list = {
                            readonly 'name': string
                            readonly 'names or strings': {
                                readonly 'first': _T_Name_Or_String
                                readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                            }
                        }
                        
                        export namespace preference {
                            
                            export namespace base {
                            }
                            export type base = _T_Name_Or_String
                            
                            export namespace direction {
                                
                                export namespace SG {
                                    
                                    export namespace $st_$st_ {
                                        
                                        export namespace first {
                                        }
                                        export type first = _T_Name_Or_String
                                        
                                        export namespace rest {
                                            
                                            export namespace L {
                                            }
                                            export type L = _T_Name_Or_String
                                        }
                                        export type rest = _i_core._T_List<null, _T_Name_Or_String>
                                    }
                                    export type $st_$st_ = {
                                        readonly 'first': _T_Name_Or_String
                                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                    }
                                    
                                    export namespace $gt_$gt_ {
                                        
                                        export namespace first {
                                        }
                                        export type first = _T_Name_Or_String
                                        
                                        export namespace rest {
                                            
                                            export namespace L {
                                            }
                                            export type L = _T_Name_Or_String
                                        }
                                        export type rest = _i_core._T_List<null, _T_Name_Or_String>
                                    }
                                    export type $gt_$gt_ = {
                                        readonly 'first': _T_Name_Or_String
                                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                    }
                                }
                                export type SG = 
                                    | readonly ['<<', {
                                        readonly 'first': _T_Name_Or_String
                                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                    }]
                                    | readonly ['>>', {
                                        readonly 'first': _T_Name_Or_String
                                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                    }]
                            }
                            export type direction = _i_core._T_State_Group<null, 
                                | readonly ['<<', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                                | readonly ['>>', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                            >
                        }
                        export type preference = {
                            readonly 'base': _T_Name_Or_String
                            readonly 'direction': _i_core._T_State_Group<null, 
                                | readonly ['<<', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                                | readonly ['>>', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                            >
                        }
                    }
                    export type SG = 
                        | readonly ['equivalence', {
                            readonly 'left hand side': _T_Equivalence_Char_Range
                            readonly 'look ahead': {
                                readonly 'char class': _T_Char_Class_Option
                            }
                            readonly 'right hand side': _T_Equivalence_Char_Range
                        }]
                        | readonly ['lexical production', {
                            readonly 'context choice': {
                                readonly 'first': _T_Context_Expression
                                readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                            }
                            readonly 'name': _i_core._T_State_Group<null, 
                                | readonly ['dot', null]
                                | readonly ['name', string]
                            >
                            readonly 'non greedy': boolean
                            readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
                        }]
                        | readonly ['lookahead list', {
                            readonly 'name': string
                            readonly 'names or strings': {
                                readonly 'first': _T_Name_Or_String
                                readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                            }
                        }]
                        | readonly ['preference', {
                            readonly 'base': _T_Name_Or_String
                            readonly 'direction': _i_core._T_State_Group<null, 
                                | readonly ['<<', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                                | readonly ['>>', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                            >
                        }]
                }
                export type L = _i_core._T_State_Group<null, 
                    | readonly ['equivalence', {
                        readonly 'left hand side': _T_Equivalence_Char_Range
                        readonly 'look ahead': {
                            readonly 'char class': _T_Char_Class_Option
                        }
                        readonly 'right hand side': _T_Equivalence_Char_Range
                    }]
                    | readonly ['lexical production', {
                        readonly 'context choice': {
                            readonly 'first': _T_Context_Expression
                            readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                        }
                        readonly 'name': _i_core._T_State_Group<null, 
                            | readonly ['dot', null]
                            | readonly ['name', string]
                        >
                        readonly 'non greedy': boolean
                        readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
                    }]
                    | readonly ['lookahead list', {
                        readonly 'name': string
                        readonly 'names or strings': {
                            readonly 'first': _T_Name_Or_String
                            readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                        }
                    }]
                    | readonly ['preference', {
                        readonly 'base': _T_Name_Or_String
                        readonly 'direction': _i_core._T_State_Group<null, 
                            | readonly ['<<', {
                                readonly 'first': _T_Name_Or_String
                                readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                            }]
                            | readonly ['>>', {
                                readonly 'first': _T_Name_Or_String
                                readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                            }]
                        >
                    }]
                >
            }
            export type lexical_rules = _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['equivalence', {
                    readonly 'left hand side': _T_Equivalence_Char_Range
                    readonly 'look ahead': {
                        readonly 'char class': _T_Char_Class_Option
                    }
                    readonly 'right hand side': _T_Equivalence_Char_Range
                }]
                | readonly ['lexical production', {
                    readonly 'context choice': {
                        readonly 'first': _T_Context_Expression
                        readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                    }
                    readonly 'name': _i_core._T_State_Group<null, 
                        | readonly ['dot', null]
                        | readonly ['name', string]
                    >
                    readonly 'non greedy': boolean
                    readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
                }]
                | readonly ['lookahead list', {
                    readonly 'name': string
                    readonly 'names or strings': {
                        readonly 'first': _T_Name_Or_String
                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                    }
                }]
                | readonly ['preference', {
                    readonly 'base': _T_Name_Or_String
                    readonly 'direction': _i_core._T_State_Group<null, 
                        | readonly ['<<', {
                            readonly 'first': _T_Name_Or_String
                            readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                        }]
                        | readonly ['>>', {
                            readonly 'first': _T_Name_Or_String
                            readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                        }]
                    >
                }]
            >>
        }
        export type O = {
            readonly 'lexical rules': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['equivalence', {
                    readonly 'left hand side': _T_Equivalence_Char_Range
                    readonly 'look ahead': {
                        readonly 'char class': _T_Char_Class_Option
                    }
                    readonly 'right hand side': _T_Equivalence_Char_Range
                }]
                | readonly ['lexical production', {
                    readonly 'context choice': {
                        readonly 'first': _T_Context_Expression
                        readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                    }
                    readonly 'name': _i_core._T_State_Group<null, 
                        | readonly ['dot', null]
                        | readonly ['name', string]
                    >
                    readonly 'non greedy': boolean
                    readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
                }]
                | readonly ['lookahead list', {
                    readonly 'name': string
                    readonly 'names or strings': {
                        readonly 'first': _T_Name_Or_String
                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                    }
                }]
                | readonly ['preference', {
                    readonly 'base': _T_Name_Or_String
                    readonly 'direction': _i_core._T_State_Group<null, 
                        | readonly ['<<', {
                            readonly 'first': _T_Name_Or_String
                            readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                        }]
                        | readonly ['>>', {
                            readonly 'first': _T_Name_Or_String
                            readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                        }]
                    >
                }]
            >>
        }
    }
    export type lexical_definition = _pt.Optional_Value<{
        readonly 'lexical rules': _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['equivalence', {
                readonly 'left hand side': _T_Equivalence_Char_Range
                readonly 'look ahead': {
                    readonly 'char class': _T_Char_Class_Option
                }
                readonly 'right hand side': _T_Equivalence_Char_Range
            }]
            | readonly ['lexical production', {
                readonly 'context choice': {
                    readonly 'first': _T_Context_Expression
                    readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                }
                readonly 'name': _i_core._T_State_Group<null, 
                    | readonly ['dot', null]
                    | readonly ['name', string]
                >
                readonly 'non greedy': boolean
                readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
            }]
            | readonly ['lookahead list', {
                readonly 'name': string
                readonly 'names or strings': {
                    readonly 'first': _T_Name_Or_String
                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                }
            }]
            | readonly ['preference', {
                readonly 'base': _T_Name_Or_String
                readonly 'direction': _i_core._T_State_Group<null, 
                    | readonly ['<<', {
                        readonly 'first': _T_Name_Or_String
                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                    }]
                    | readonly ['>>', {
                        readonly 'first': _T_Name_Or_String
                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                    }]
                >
            }]
        >>
    }>
    
    export namespace prolog {
        
        export namespace L {
        }
        export type L = _T_Processing_Instruction
    }
    export type prolog = _i_core._T_List<null, _T_Processing_Instruction>
    
    export namespace syntax_definition {
        
        export namespace syntax_productions {
            
            export namespace first {
            }
            export type first = _T_Syntax_Production
            
            export namespace rest {
                
                export namespace L {
                }
                export type L = _T_Syntax_Production
            }
            export type rest = _i_core._T_List<null, _T_Syntax_Production>
        }
        export type syntax_productions = {
            readonly 'first': _T_Syntax_Production
            readonly 'rest': _i_core._T_List<null, _T_Syntax_Production>
        }
    }
    export type syntax_definition = {
        readonly 'syntax productions': {
            readonly 'first': _T_Syntax_Production
            readonly 'rest': _i_core._T_List<null, _T_Syntax_Production>
        }
    }
}

export namespace _T_Lexical_Item {
    
    export namespace lexical_primary {
        
        export namespace SG {
            
            export namespace char_class {
                
                export namespace items {
                    
                    export namespace first {
                    }
                    export type first = _T_Char_Class_Option
                    
                    export namespace rest {
                        
                        export namespace L {
                        }
                        export type L = _T_Char_Class_Option
                    }
                    export type rest = _i_core._T_List<null, _T_Char_Class_Option>
                }
                export type items = {
                    readonly 'first': _T_Char_Class_Option
                    readonly 'rest': _i_core._T_List<null, _T_Char_Class_Option>
                }
                export type negated = boolean
            }
            export type char_class = {
                readonly 'items': {
                    readonly 'first': _T_Char_Class_Option
                    readonly 'rest': _i_core._T_List<null, _T_Char_Class_Option>
                }
                readonly 'negated': boolean
            }
            export type char_code = string
            export type end_of_input = null
            
            export namespace name_or_any_character {
                
                export namespace SG {
                    export type any_character_ = null
                    export type name = string
                }
                export type SG = 
                    | readonly ['any character ', null]
                    | readonly ['name', string]
            }
            export type name_or_any_character = _i_core._T_State_Group<null, 
                | readonly ['any character ', null]
                | readonly ['name', string]
            >
            
            export namespace parenthesized {
                
                export namespace lexical_choice {
                    
                    export namespace first {
                    }
                    export type first = _T_Lexical_Sequence
                    
                    export namespace rest {
                        
                        export namespace L {
                        }
                        export type L = _T_Lexical_Sequence
                    }
                    export type rest = _i_core._T_List<null, _T_Lexical_Sequence>
                }
                export type lexical_choice = {
                    readonly 'first': _T_Lexical_Sequence
                    readonly 'rest': _i_core._T_List<null, _T_Lexical_Sequence>
                }
            }
            export type parenthesized = {
                readonly 'lexical choice': {
                    readonly 'first': _T_Lexical_Sequence
                    readonly 'rest': _i_core._T_List<null, _T_Lexical_Sequence>
                }
            }
            export type string_literal = string
        }
        export type SG = 
            | readonly ['char class', {
                readonly 'items': {
                    readonly 'first': _T_Char_Class_Option
                    readonly 'rest': _i_core._T_List<null, _T_Char_Class_Option>
                }
                readonly 'negated': boolean
            }]
            | readonly ['char code', string]
            | readonly ['end of input', null]
            | readonly ['name or any character', _i_core._T_State_Group<null, 
                | readonly ['any character ', null]
                | readonly ['name', string]
            >]
            | readonly ['parenthesized', {
                readonly 'lexical choice': {
                    readonly 'first': _T_Lexical_Sequence
                    readonly 'rest': _i_core._T_List<null, _T_Lexical_Sequence>
                }
            }]
            | readonly ['string literal', string]
    }
    export type lexical_primary = _i_core._T_State_Group<null, 
        | readonly ['char class', {
            readonly 'items': {
                readonly 'first': _T_Char_Class_Option
                readonly 'rest': _i_core._T_List<null, _T_Char_Class_Option>
            }
            readonly 'negated': boolean
        }]
        | readonly ['char code', string]
        | readonly ['end of input', null]
        | readonly ['name or any character', _i_core._T_State_Group<null, 
            | readonly ['any character ', null]
            | readonly ['name', string]
        >]
        | readonly ['parenthesized', {
            readonly 'lexical choice': {
                readonly 'first': _T_Lexical_Sequence
                readonly 'rest': _i_core._T_List<null, _T_Lexical_Sequence>
            }
        }]
        | readonly ['string literal', string]
    >
    
    export namespace quantifier {
        
        export namespace O {
            
            export namespace SG {
                export type more_than_one = null
                export type multiple = null
                export type optional = null
            }
            export type SG = 
                | readonly ['more than one', null]
                | readonly ['multiple', null]
                | readonly ['optional', null]
        }
        export type O = _i_core._T_State_Group<null, 
            | readonly ['more than one', null]
            | readonly ['multiple', null]
            | readonly ['optional', null]
        >
    }
    export type quantifier = _pt.Optional_Value<_i_core._T_State_Group<null, 
        | readonly ['more than one', null]
        | readonly ['multiple', null]
        | readonly ['optional', null]
    >>
}

export namespace _T_Lexical_Sequence {
    
    export namespace first {
    }
    export type first = _T_Lexical_Item
    
    export namespace second {
        
        export namespace SG {
            
            export namespace exclusion {
                
                export namespace what_to_exclude {
                }
                export type what_to_exclude = _T_Lexical_Item
            }
            export type exclusion = {
                readonly 'what to exclude': _T_Lexical_Item
            }
            
            export namespace multiple {
                
                export namespace L {
                }
                export type L = _T_Lexical_Item
            }
            export type multiple = _i_core._T_List<null, _T_Lexical_Item>
        }
        export type SG = 
            | readonly ['exclusion', {
                readonly 'what to exclude': _T_Lexical_Item
            }]
            | readonly ['multiple', _i_core._T_List<null, _T_Lexical_Item>]
    }
    export type second = _i_core._T_State_Group<null, 
        | readonly ['exclusion', {
            readonly 'what to exclude': _T_Lexical_Item
        }]
        | readonly ['multiple', _i_core._T_List<null, _T_Lexical_Item>]
    >
}

export namespace _T_Name_Or_String {
    
    export namespace SG {
        
        export namespace name {
            
            export namespace context {
                
                export namespace O {
                }
                export type O = _T_Context
            }
            export type context = _pt.Optional_Value<_T_Context>
            export type name = string
        }
        export type name = {
            readonly 'context': _pt.Optional_Value<_T_Context>
            readonly 'name': string
        }
        
        export namespace _string {
            
            export namespace context {
                
                export namespace O {
                }
                export type O = _T_Context
            }
            export type context = _pt.Optional_Value<_T_Context>
            export type string_literal = string
        }
        export type _string = {
            readonly 'context': _pt.Optional_Value<_T_Context>
            readonly 'string literal': string
        }
    }
    export type SG = 
        | readonly ['name', {
            readonly 'context': _pt.Optional_Value<_T_Context>
            readonly 'name': string
        }]
        | readonly ['string', {
            readonly 'context': _pt.Optional_Value<_T_Context>
            readonly 'string literal': string
        }]
}

export namespace _T_Processing_Instruction {
    export type dir_pi_contents = string
    export type name = string
}

export namespace _T_Syntax_Choice {
    
    export namespace first {
    }
    export type first = _T_Syntax_Sequence
    
    export namespace rest {
        
        export namespace O {
            
            export namespace SG {
                
                export namespace ordered {
                    
                    export namespace sequence {
                        
                        export namespace L {
                        }
                        export type L = _T_Syntax_Sequence
                    }
                    export type sequence = _i_core._T_List<null, _T_Syntax_Sequence>
                }
                export type ordered = {
                    readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
                }
                
                export namespace unordered {
                    
                    export namespace sequence {
                        
                        export namespace L {
                        }
                        export type L = _T_Syntax_Sequence
                    }
                    export type sequence = _i_core._T_List<null, _T_Syntax_Sequence>
                }
                export type unordered = {
                    readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
                }
            }
            export type SG = 
                | readonly ['ordered', {
                    readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
                }]
                | readonly ['unordered', {
                    readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
                }]
        }
        export type O = _i_core._T_State_Group<null, 
            | readonly ['ordered', {
                readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
            }]
            | readonly ['unordered', {
                readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
            }]
        >
    }
    export type rest = _pt.Optional_Value<_i_core._T_State_Group<null, 
        | readonly ['ordered', {
            readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
        }]
        | readonly ['unordered', {
            readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
        }]
    >>
}

export namespace _T_Syntax_Production {
    export type name = string
    
    export namespace options {
        
        export namespace L {
        }
        export type L = _T_Whitespace_Option
    }
    export type options = _i_core._T_List<null, _T_Whitespace_Option>
    
    export namespace syntax_choice {
    }
    export type syntax_choice = _T_Syntax_Choice
}

export namespace _T_Syntax_Sequence {
    
    export namespace items {
        
        export namespace L {
            
            export namespace quantifier {
                
                export namespace O {
                    
                    export namespace SG {
                        export type $sr_ = null
                        export type $pl_ = null
                        export type $qu_ = null
                    }
                    export type SG = 
                        | readonly ['*', null]
                        | readonly ['+', null]
                        | readonly ['?', null]
                }
                export type O = _i_core._T_State_Group<null, 
                    | readonly ['*', null]
                    | readonly ['+', null]
                    | readonly ['?', null]
                >
            }
            export type quantifier = _pt.Optional_Value<_i_core._T_State_Group<null, 
                | readonly ['*', null]
                | readonly ['+', null]
                | readonly ['?', null]
            >>
            
            export namespace syntax_primary {
                
                export namespace SG {
                    
                    export namespace name_or_string {
                    }
                    export type name_or_string = _T_Name_Or_String
                    
                    export namespace parenthesized {
                        
                        export namespace syntax_choice {
                        }
                        export type syntax_choice = _T_Syntax_Choice
                    }
                    export type parenthesized = {
                        readonly 'syntax choice': _T_Syntax_Choice
                    }
                    
                    export namespace processing_instruction {
                    }
                    export type processing_instruction = _T_Processing_Instruction
                }
                export type SG = 
                    | readonly ['name or string', _T_Name_Or_String]
                    | readonly ['parenthesized', {
                        readonly 'syntax choice': _T_Syntax_Choice
                    }]
                    | readonly ['processing instruction', _T_Processing_Instruction]
            }
            export type syntax_primary = _i_core._T_State_Group<null, 
                | readonly ['name or string', _T_Name_Or_String]
                | readonly ['parenthesized', {
                    readonly 'syntax choice': _T_Syntax_Choice
                }]
                | readonly ['processing instruction', _T_Processing_Instruction]
            >
        }
        export type L = {
            readonly 'quantifier': _pt.Optional_Value<_i_core._T_State_Group<null, 
                | readonly ['*', null]
                | readonly ['+', null]
                | readonly ['?', null]
            >>
            readonly 'syntax primary': _i_core._T_State_Group<null, 
                | readonly ['name or string', _T_Name_Or_String]
                | readonly ['parenthesized', {
                    readonly 'syntax choice': _T_Syntax_Choice
                }]
                | readonly ['processing instruction', _T_Processing_Instruction]
            >
        }
    }
    export type items = _i_core._T_List<null, {
        readonly 'quantifier': _pt.Optional_Value<_i_core._T_State_Group<null, 
            | readonly ['*', null]
            | readonly ['+', null]
            | readonly ['?', null]
        >>
        readonly 'syntax primary': _i_core._T_State_Group<null, 
            | readonly ['name or string', _T_Name_Or_String]
            | readonly ['parenthesized', {
                readonly 'syntax choice': _T_Syntax_Choice
            }]
            | readonly ['processing instruction', _T_Processing_Instruction]
        >
    }>
}

export namespace _T_Whitespace_Option {
    
    export namespace SG {
        export type definition = null
        export type explicit = null
    }
    export type SG = 
        | readonly ['definition', null]
        | readonly ['explicit', null]
}

// *** ALIASES FOR NESTED TYPES

export namespace Char_Class_Option {
    
    export namespace SG {
        export type char = string
        export type char_code = string
        
        export namespace char_code_range {
            export type _from = string
            export type to = string
        }
        export type char_code_range = {
            readonly 'from': string
            readonly 'to': string
        }
        
        export namespace char_range {
            export type _from = string
            export type to = string
        }
        export type char_range = {
            readonly 'from': string
            readonly 'to': string
        }
    }
    export type SG = 
        | readonly ['char', string]
        | readonly ['char code', string]
        | readonly ['char code range', {
            readonly 'from': string
            readonly 'to': string
        }]
        | readonly ['char range', {
            readonly 'from': string
            readonly 'to': string
        }]
}

export namespace Context {
    export type caret_name = string
}

export namespace Context_Expression {
    
    export namespace lexical_sequence {
    }
    export type lexical_sequence = _T_Lexical_Sequence
    
    export namespace lookahead {
        
        export namespace O {
        }
        export type O = _T_Lexical_Item
    }
    export type lookahead = _pt.Optional_Value<_T_Lexical_Item>
}

export namespace Equivalence_Char_Range {
    
    export namespace SG {
        
        export namespace char_class {
        }
        export type char_class = _T_Char_Class_Option
        export type string_literal = string
    }
    export type SG = 
        | readonly ['char class', _T_Char_Class_Option]
        | readonly ['string literal', string]
}

export namespace Grammar {
    
    export namespace encore {
        
        export namespace O {
            
            export namespace L {
            }
            export type L = _T_Processing_Instruction
        }
        export type O = _i_core._T_List<null, _T_Processing_Instruction>
    }
    export type encore = _pt.Optional_Value<_i_core._T_List<null, _T_Processing_Instruction>>
    
    export namespace lexical_definition {
        
        export namespace O {
            
            export namespace lexical_rules {
                
                export namespace L {
                    
                    export namespace SG {
                        
                        export namespace equivalence {
                            
                            export namespace left_hand_side {
                            }
                            export type left_hand_side = _T_Equivalence_Char_Range
                            
                            export namespace look_ahead {
                                
                                export namespace char_class {
                                }
                                export type char_class = _T_Char_Class_Option
                            }
                            export type look_ahead = {
                                readonly 'char class': _T_Char_Class_Option
                            }
                            
                            export namespace right_hand_side {
                            }
                            export type right_hand_side = _T_Equivalence_Char_Range
                        }
                        export type equivalence = {
                            readonly 'left hand side': _T_Equivalence_Char_Range
                            readonly 'look ahead': {
                                readonly 'char class': _T_Char_Class_Option
                            }
                            readonly 'right hand side': _T_Equivalence_Char_Range
                        }
                        
                        export namespace lexical_production {
                            
                            export namespace context_choice {
                                
                                export namespace first {
                                }
                                export type first = _T_Context_Expression
                                
                                export namespace rest {
                                    
                                    export namespace L {
                                    }
                                    export type L = _T_Context_Expression
                                }
                                export type rest = _i_core._T_List<null, _T_Context_Expression>
                            }
                            export type context_choice = {
                                readonly 'first': _T_Context_Expression
                                readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                            }
                            
                            export namespace name {
                                
                                export namespace SG {
                                    export type dot = null
                                    export type name = string
                                }
                                export type SG = 
                                    | readonly ['dot', null]
                                    | readonly ['name', string]
                            }
                            export type name = _i_core._T_State_Group<null, 
                                | readonly ['dot', null]
                                | readonly ['name', string]
                            >
                            export type non_greedy = boolean
                            
                            export namespace options {
                                
                                export namespace L {
                                }
                                export type L = _T_Whitespace_Option
                            }
                            export type options = _i_core._T_List<null, _T_Whitespace_Option>
                        }
                        export type lexical_production = {
                            readonly 'context choice': {
                                readonly 'first': _T_Context_Expression
                                readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                            }
                            readonly 'name': _i_core._T_State_Group<null, 
                                | readonly ['dot', null]
                                | readonly ['name', string]
                            >
                            readonly 'non greedy': boolean
                            readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
                        }
                        
                        export namespace lookahead_list {
                            export type name = string
                            
                            export namespace names_or_strings {
                                
                                export namespace first {
                                }
                                export type first = _T_Name_Or_String
                                
                                export namespace rest {
                                    
                                    export namespace L {
                                    }
                                    export type L = _T_Name_Or_String
                                }
                                export type rest = _i_core._T_List<null, _T_Name_Or_String>
                            }
                            export type names_or_strings = {
                                readonly 'first': _T_Name_Or_String
                                readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                            }
                        }
                        export type lookahead_list = {
                            readonly 'name': string
                            readonly 'names or strings': {
                                readonly 'first': _T_Name_Or_String
                                readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                            }
                        }
                        
                        export namespace preference {
                            
                            export namespace base {
                            }
                            export type base = _T_Name_Or_String
                            
                            export namespace direction {
                                
                                export namespace SG {
                                    
                                    export namespace $st_$st_ {
                                        
                                        export namespace first {
                                        }
                                        export type first = _T_Name_Or_String
                                        
                                        export namespace rest {
                                            
                                            export namespace L {
                                            }
                                            export type L = _T_Name_Or_String
                                        }
                                        export type rest = _i_core._T_List<null, _T_Name_Or_String>
                                    }
                                    export type $st_$st_ = {
                                        readonly 'first': _T_Name_Or_String
                                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                    }
                                    
                                    export namespace $gt_$gt_ {
                                        
                                        export namespace first {
                                        }
                                        export type first = _T_Name_Or_String
                                        
                                        export namespace rest {
                                            
                                            export namespace L {
                                            }
                                            export type L = _T_Name_Or_String
                                        }
                                        export type rest = _i_core._T_List<null, _T_Name_Or_String>
                                    }
                                    export type $gt_$gt_ = {
                                        readonly 'first': _T_Name_Or_String
                                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                    }
                                }
                                export type SG = 
                                    | readonly ['<<', {
                                        readonly 'first': _T_Name_Or_String
                                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                    }]
                                    | readonly ['>>', {
                                        readonly 'first': _T_Name_Or_String
                                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                    }]
                            }
                            export type direction = _i_core._T_State_Group<null, 
                                | readonly ['<<', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                                | readonly ['>>', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                            >
                        }
                        export type preference = {
                            readonly 'base': _T_Name_Or_String
                            readonly 'direction': _i_core._T_State_Group<null, 
                                | readonly ['<<', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                                | readonly ['>>', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                            >
                        }
                    }
                    export type SG = 
                        | readonly ['equivalence', {
                            readonly 'left hand side': _T_Equivalence_Char_Range
                            readonly 'look ahead': {
                                readonly 'char class': _T_Char_Class_Option
                            }
                            readonly 'right hand side': _T_Equivalence_Char_Range
                        }]
                        | readonly ['lexical production', {
                            readonly 'context choice': {
                                readonly 'first': _T_Context_Expression
                                readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                            }
                            readonly 'name': _i_core._T_State_Group<null, 
                                | readonly ['dot', null]
                                | readonly ['name', string]
                            >
                            readonly 'non greedy': boolean
                            readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
                        }]
                        | readonly ['lookahead list', {
                            readonly 'name': string
                            readonly 'names or strings': {
                                readonly 'first': _T_Name_Or_String
                                readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                            }
                        }]
                        | readonly ['preference', {
                            readonly 'base': _T_Name_Or_String
                            readonly 'direction': _i_core._T_State_Group<null, 
                                | readonly ['<<', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                                | readonly ['>>', {
                                    readonly 'first': _T_Name_Or_String
                                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                                }]
                            >
                        }]
                }
                export type L = _i_core._T_State_Group<null, 
                    | readonly ['equivalence', {
                        readonly 'left hand side': _T_Equivalence_Char_Range
                        readonly 'look ahead': {
                            readonly 'char class': _T_Char_Class_Option
                        }
                        readonly 'right hand side': _T_Equivalence_Char_Range
                    }]
                    | readonly ['lexical production', {
                        readonly 'context choice': {
                            readonly 'first': _T_Context_Expression
                            readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                        }
                        readonly 'name': _i_core._T_State_Group<null, 
                            | readonly ['dot', null]
                            | readonly ['name', string]
                        >
                        readonly 'non greedy': boolean
                        readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
                    }]
                    | readonly ['lookahead list', {
                        readonly 'name': string
                        readonly 'names or strings': {
                            readonly 'first': _T_Name_Or_String
                            readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                        }
                    }]
                    | readonly ['preference', {
                        readonly 'base': _T_Name_Or_String
                        readonly 'direction': _i_core._T_State_Group<null, 
                            | readonly ['<<', {
                                readonly 'first': _T_Name_Or_String
                                readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                            }]
                            | readonly ['>>', {
                                readonly 'first': _T_Name_Or_String
                                readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                            }]
                        >
                    }]
                >
            }
            export type lexical_rules = _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['equivalence', {
                    readonly 'left hand side': _T_Equivalence_Char_Range
                    readonly 'look ahead': {
                        readonly 'char class': _T_Char_Class_Option
                    }
                    readonly 'right hand side': _T_Equivalence_Char_Range
                }]
                | readonly ['lexical production', {
                    readonly 'context choice': {
                        readonly 'first': _T_Context_Expression
                        readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                    }
                    readonly 'name': _i_core._T_State_Group<null, 
                        | readonly ['dot', null]
                        | readonly ['name', string]
                    >
                    readonly 'non greedy': boolean
                    readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
                }]
                | readonly ['lookahead list', {
                    readonly 'name': string
                    readonly 'names or strings': {
                        readonly 'first': _T_Name_Or_String
                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                    }
                }]
                | readonly ['preference', {
                    readonly 'base': _T_Name_Or_String
                    readonly 'direction': _i_core._T_State_Group<null, 
                        | readonly ['<<', {
                            readonly 'first': _T_Name_Or_String
                            readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                        }]
                        | readonly ['>>', {
                            readonly 'first': _T_Name_Or_String
                            readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                        }]
                    >
                }]
            >>
        }
        export type O = {
            readonly 'lexical rules': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['equivalence', {
                    readonly 'left hand side': _T_Equivalence_Char_Range
                    readonly 'look ahead': {
                        readonly 'char class': _T_Char_Class_Option
                    }
                    readonly 'right hand side': _T_Equivalence_Char_Range
                }]
                | readonly ['lexical production', {
                    readonly 'context choice': {
                        readonly 'first': _T_Context_Expression
                        readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                    }
                    readonly 'name': _i_core._T_State_Group<null, 
                        | readonly ['dot', null]
                        | readonly ['name', string]
                    >
                    readonly 'non greedy': boolean
                    readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
                }]
                | readonly ['lookahead list', {
                    readonly 'name': string
                    readonly 'names or strings': {
                        readonly 'first': _T_Name_Or_String
                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                    }
                }]
                | readonly ['preference', {
                    readonly 'base': _T_Name_Or_String
                    readonly 'direction': _i_core._T_State_Group<null, 
                        | readonly ['<<', {
                            readonly 'first': _T_Name_Or_String
                            readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                        }]
                        | readonly ['>>', {
                            readonly 'first': _T_Name_Or_String
                            readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                        }]
                    >
                }]
            >>
        }
    }
    export type lexical_definition = _pt.Optional_Value<{
        readonly 'lexical rules': _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['equivalence', {
                readonly 'left hand side': _T_Equivalence_Char_Range
                readonly 'look ahead': {
                    readonly 'char class': _T_Char_Class_Option
                }
                readonly 'right hand side': _T_Equivalence_Char_Range
            }]
            | readonly ['lexical production', {
                readonly 'context choice': {
                    readonly 'first': _T_Context_Expression
                    readonly 'rest': _i_core._T_List<null, _T_Context_Expression>
                }
                readonly 'name': _i_core._T_State_Group<null, 
                    | readonly ['dot', null]
                    | readonly ['name', string]
                >
                readonly 'non greedy': boolean
                readonly 'options': _i_core._T_List<null, _T_Whitespace_Option>
            }]
            | readonly ['lookahead list', {
                readonly 'name': string
                readonly 'names or strings': {
                    readonly 'first': _T_Name_Or_String
                    readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                }
            }]
            | readonly ['preference', {
                readonly 'base': _T_Name_Or_String
                readonly 'direction': _i_core._T_State_Group<null, 
                    | readonly ['<<', {
                        readonly 'first': _T_Name_Or_String
                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                    }]
                    | readonly ['>>', {
                        readonly 'first': _T_Name_Or_String
                        readonly 'rest': _i_core._T_List<null, _T_Name_Or_String>
                    }]
                >
            }]
        >>
    }>
    
    export namespace prolog {
        
        export namespace L {
        }
        export type L = _T_Processing_Instruction
    }
    export type prolog = _i_core._T_List<null, _T_Processing_Instruction>
    
    export namespace syntax_definition {
        
        export namespace syntax_productions {
            
            export namespace first {
            }
            export type first = _T_Syntax_Production
            
            export namespace rest {
                
                export namespace L {
                }
                export type L = _T_Syntax_Production
            }
            export type rest = _i_core._T_List<null, _T_Syntax_Production>
        }
        export type syntax_productions = {
            readonly 'first': _T_Syntax_Production
            readonly 'rest': _i_core._T_List<null, _T_Syntax_Production>
        }
    }
    export type syntax_definition = {
        readonly 'syntax productions': {
            readonly 'first': _T_Syntax_Production
            readonly 'rest': _i_core._T_List<null, _T_Syntax_Production>
        }
    }
}

export namespace Lexical_Item {
    
    export namespace lexical_primary {
        
        export namespace SG {
            
            export namespace char_class {
                
                export namespace items {
                    
                    export namespace first {
                    }
                    export type first = _T_Char_Class_Option
                    
                    export namespace rest {
                        
                        export namespace L {
                        }
                        export type L = _T_Char_Class_Option
                    }
                    export type rest = _i_core._T_List<null, _T_Char_Class_Option>
                }
                export type items = {
                    readonly 'first': _T_Char_Class_Option
                    readonly 'rest': _i_core._T_List<null, _T_Char_Class_Option>
                }
                export type negated = boolean
            }
            export type char_class = {
                readonly 'items': {
                    readonly 'first': _T_Char_Class_Option
                    readonly 'rest': _i_core._T_List<null, _T_Char_Class_Option>
                }
                readonly 'negated': boolean
            }
            export type char_code = string
            export type end_of_input = null
            
            export namespace name_or_any_character {
                
                export namespace SG {
                    export type any_character_ = null
                    export type name = string
                }
                export type SG = 
                    | readonly ['any character ', null]
                    | readonly ['name', string]
            }
            export type name_or_any_character = _i_core._T_State_Group<null, 
                | readonly ['any character ', null]
                | readonly ['name', string]
            >
            
            export namespace parenthesized {
                
                export namespace lexical_choice {
                    
                    export namespace first {
                    }
                    export type first = _T_Lexical_Sequence
                    
                    export namespace rest {
                        
                        export namespace L {
                        }
                        export type L = _T_Lexical_Sequence
                    }
                    export type rest = _i_core._T_List<null, _T_Lexical_Sequence>
                }
                export type lexical_choice = {
                    readonly 'first': _T_Lexical_Sequence
                    readonly 'rest': _i_core._T_List<null, _T_Lexical_Sequence>
                }
            }
            export type parenthesized = {
                readonly 'lexical choice': {
                    readonly 'first': _T_Lexical_Sequence
                    readonly 'rest': _i_core._T_List<null, _T_Lexical_Sequence>
                }
            }
            export type string_literal = string
        }
        export type SG = 
            | readonly ['char class', {
                readonly 'items': {
                    readonly 'first': _T_Char_Class_Option
                    readonly 'rest': _i_core._T_List<null, _T_Char_Class_Option>
                }
                readonly 'negated': boolean
            }]
            | readonly ['char code', string]
            | readonly ['end of input', null]
            | readonly ['name or any character', _i_core._T_State_Group<null, 
                | readonly ['any character ', null]
                | readonly ['name', string]
            >]
            | readonly ['parenthesized', {
                readonly 'lexical choice': {
                    readonly 'first': _T_Lexical_Sequence
                    readonly 'rest': _i_core._T_List<null, _T_Lexical_Sequence>
                }
            }]
            | readonly ['string literal', string]
    }
    export type lexical_primary = _i_core._T_State_Group<null, 
        | readonly ['char class', {
            readonly 'items': {
                readonly 'first': _T_Char_Class_Option
                readonly 'rest': _i_core._T_List<null, _T_Char_Class_Option>
            }
            readonly 'negated': boolean
        }]
        | readonly ['char code', string]
        | readonly ['end of input', null]
        | readonly ['name or any character', _i_core._T_State_Group<null, 
            | readonly ['any character ', null]
            | readonly ['name', string]
        >]
        | readonly ['parenthesized', {
            readonly 'lexical choice': {
                readonly 'first': _T_Lexical_Sequence
                readonly 'rest': _i_core._T_List<null, _T_Lexical_Sequence>
            }
        }]
        | readonly ['string literal', string]
    >
    
    export namespace quantifier {
        
        export namespace O {
            
            export namespace SG {
                export type more_than_one = null
                export type multiple = null
                export type optional = null
            }
            export type SG = 
                | readonly ['more than one', null]
                | readonly ['multiple', null]
                | readonly ['optional', null]
        }
        export type O = _i_core._T_State_Group<null, 
            | readonly ['more than one', null]
            | readonly ['multiple', null]
            | readonly ['optional', null]
        >
    }
    export type quantifier = _pt.Optional_Value<_i_core._T_State_Group<null, 
        | readonly ['more than one', null]
        | readonly ['multiple', null]
        | readonly ['optional', null]
    >>
}

export namespace Lexical_Sequence {
    
    export namespace first {
    }
    export type first = _T_Lexical_Item
    
    export namespace second {
        
        export namespace SG {
            
            export namespace exclusion {
                
                export namespace what_to_exclude {
                }
                export type what_to_exclude = _T_Lexical_Item
            }
            export type exclusion = {
                readonly 'what to exclude': _T_Lexical_Item
            }
            
            export namespace multiple {
                
                export namespace L {
                }
                export type L = _T_Lexical_Item
            }
            export type multiple = _i_core._T_List<null, _T_Lexical_Item>
        }
        export type SG = 
            | readonly ['exclusion', {
                readonly 'what to exclude': _T_Lexical_Item
            }]
            | readonly ['multiple', _i_core._T_List<null, _T_Lexical_Item>]
    }
    export type second = _i_core._T_State_Group<null, 
        | readonly ['exclusion', {
            readonly 'what to exclude': _T_Lexical_Item
        }]
        | readonly ['multiple', _i_core._T_List<null, _T_Lexical_Item>]
    >
}

export namespace Name_Or_String {
    
    export namespace SG {
        
        export namespace name {
            
            export namespace context {
                
                export namespace O {
                }
                export type O = _T_Context
            }
            export type context = _pt.Optional_Value<_T_Context>
            export type name = string
        }
        export type name = {
            readonly 'context': _pt.Optional_Value<_T_Context>
            readonly 'name': string
        }
        
        export namespace _string {
            
            export namespace context {
                
                export namespace O {
                }
                export type O = _T_Context
            }
            export type context = _pt.Optional_Value<_T_Context>
            export type string_literal = string
        }
        export type _string = {
            readonly 'context': _pt.Optional_Value<_T_Context>
            readonly 'string literal': string
        }
    }
    export type SG = 
        | readonly ['name', {
            readonly 'context': _pt.Optional_Value<_T_Context>
            readonly 'name': string
        }]
        | readonly ['string', {
            readonly 'context': _pt.Optional_Value<_T_Context>
            readonly 'string literal': string
        }]
}

export namespace Processing_Instruction {
    export type dir_pi_contents = string
    export type name = string
}

export namespace Syntax_Choice {
    
    export namespace first {
    }
    export type first = _T_Syntax_Sequence
    
    export namespace rest {
        
        export namespace O {
            
            export namespace SG {
                
                export namespace ordered {
                    
                    export namespace sequence {
                        
                        export namespace L {
                        }
                        export type L = _T_Syntax_Sequence
                    }
                    export type sequence = _i_core._T_List<null, _T_Syntax_Sequence>
                }
                export type ordered = {
                    readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
                }
                
                export namespace unordered {
                    
                    export namespace sequence {
                        
                        export namespace L {
                        }
                        export type L = _T_Syntax_Sequence
                    }
                    export type sequence = _i_core._T_List<null, _T_Syntax_Sequence>
                }
                export type unordered = {
                    readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
                }
            }
            export type SG = 
                | readonly ['ordered', {
                    readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
                }]
                | readonly ['unordered', {
                    readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
                }]
        }
        export type O = _i_core._T_State_Group<null, 
            | readonly ['ordered', {
                readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
            }]
            | readonly ['unordered', {
                readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
            }]
        >
    }
    export type rest = _pt.Optional_Value<_i_core._T_State_Group<null, 
        | readonly ['ordered', {
            readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
        }]
        | readonly ['unordered', {
            readonly 'sequence': _i_core._T_List<null, _T_Syntax_Sequence>
        }]
    >>
}

export namespace Syntax_Production {
    export type name = string
    
    export namespace options {
        
        export namespace L {
        }
        export type L = _T_Whitespace_Option
    }
    export type options = _i_core._T_List<null, _T_Whitespace_Option>
    
    export namespace syntax_choice {
    }
    export type syntax_choice = _T_Syntax_Choice
}

export namespace Syntax_Sequence {
    
    export namespace items {
        
        export namespace L {
            
            export namespace quantifier {
                
                export namespace O {
                    
                    export namespace SG {
                        export type $sr_ = null
                        export type $pl_ = null
                        export type $qu_ = null
                    }
                    export type SG = 
                        | readonly ['*', null]
                        | readonly ['+', null]
                        | readonly ['?', null]
                }
                export type O = _i_core._T_State_Group<null, 
                    | readonly ['*', null]
                    | readonly ['+', null]
                    | readonly ['?', null]
                >
            }
            export type quantifier = _pt.Optional_Value<_i_core._T_State_Group<null, 
                | readonly ['*', null]
                | readonly ['+', null]
                | readonly ['?', null]
            >>
            
            export namespace syntax_primary {
                
                export namespace SG {
                    
                    export namespace name_or_string {
                    }
                    export type name_or_string = _T_Name_Or_String
                    
                    export namespace parenthesized {
                        
                        export namespace syntax_choice {
                        }
                        export type syntax_choice = _T_Syntax_Choice
                    }
                    export type parenthesized = {
                        readonly 'syntax choice': _T_Syntax_Choice
                    }
                    
                    export namespace processing_instruction {
                    }
                    export type processing_instruction = _T_Processing_Instruction
                }
                export type SG = 
                    | readonly ['name or string', _T_Name_Or_String]
                    | readonly ['parenthesized', {
                        readonly 'syntax choice': _T_Syntax_Choice
                    }]
                    | readonly ['processing instruction', _T_Processing_Instruction]
            }
            export type syntax_primary = _i_core._T_State_Group<null, 
                | readonly ['name or string', _T_Name_Or_String]
                | readonly ['parenthesized', {
                    readonly 'syntax choice': _T_Syntax_Choice
                }]
                | readonly ['processing instruction', _T_Processing_Instruction]
            >
        }
        export type L = {
            readonly 'quantifier': _pt.Optional_Value<_i_core._T_State_Group<null, 
                | readonly ['*', null]
                | readonly ['+', null]
                | readonly ['?', null]
            >>
            readonly 'syntax primary': _i_core._T_State_Group<null, 
                | readonly ['name or string', _T_Name_Or_String]
                | readonly ['parenthesized', {
                    readonly 'syntax choice': _T_Syntax_Choice
                }]
                | readonly ['processing instruction', _T_Processing_Instruction]
            >
        }
    }
    export type items = _i_core._T_List<null, {
        readonly 'quantifier': _pt.Optional_Value<_i_core._T_State_Group<null, 
            | readonly ['*', null]
            | readonly ['+', null]
            | readonly ['?', null]
        >>
        readonly 'syntax primary': _i_core._T_State_Group<null, 
            | readonly ['name or string', _T_Name_Or_String]
            | readonly ['parenthesized', {
                readonly 'syntax choice': _T_Syntax_Choice
            }]
            | readonly ['processing instruction', _T_Processing_Instruction]
        >
    }>
}

export namespace Whitespace_Option {
    
    export namespace SG {
        export type definition = null
        export type explicit = null
    }
    export type SG = 
        | readonly ['definition', null]
        | readonly ['explicit', null]
}
