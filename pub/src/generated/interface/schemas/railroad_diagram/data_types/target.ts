import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Char_Class_Element = _i_core._T_State_Group<null, 
    | readonly ['char', string]
    | readonly ['char code', _T_Char_Code]
    | readonly ['char code range', {
        readonly 'from': _T_Char_Code
        readonly 'to': _T_Char_Code
    }]
    | readonly ['char range', {
        readonly 'from': string
        readonly 'to': string
    }]
>

export type _T_Char_Code = string

export type _T_Choice = {
    readonly 'first': _T_Composite_Expression
    readonly 'rest': _i_core._T_List<null, _T_Composite_Expression>
}

export type _T_Composite_Expression = {
    readonly 'head': _T_Item
    readonly 'tail': _pt.Optional_Value<_i_core._T_State_Group<null, 
        | readonly ['siblings', {
            readonly 'items': _i_core._T_List<null, _T_Item>
        }]
        | readonly ['special', {
            readonly 'item': _T_Item
            readonly 'operator': _i_core._T_State_Group<null, 
                | readonly ['**', null]
                | readonly ['++', null]
                | readonly ['-', null]
            >
        }]
    >>
}

export type _T_Grammar = {
    readonly 'productions': _i_core._T_List<null, {
        readonly 'definition': _i_core._T_State_Group<null, 
            | readonly ['choice', _T_Choice]
            | readonly ['link', {
                readonly 'url': string
            }]
        >
        readonly 'name': string
    }>
}

export type _T_Item = {
    readonly 'primary': _i_core._T_State_Group<null, 
        | readonly ['char class', {
            readonly 'first': _T_Char_Class_Element
            readonly 'negated': boolean
            readonly 'rest': _i_core._T_List<null, _T_Char_Class_Element>
        }]
        | readonly ['char code', _T_Char_Code]
        | readonly ['choice', _T_Choice]
        | readonly ['name', string]
        | readonly ['string literal', _T_String_Literal]
    >
    readonly 'quantifier': _pt.Optional_Value<_i_core._T_State_Group<null, 
        | readonly ['*', null]
        | readonly ['+', null]
        | readonly ['?', null]
    >>
}

export type _T_String_Literal = {
    readonly 'delimiter': _i_core._T_State_Group<null, 
        | readonly ['apostrophe', string]
        | readonly ['quote', string]
    >
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Char_Class_Element = _T_Char_Class_Element

export type Char_Code = _T_Char_Code

export type Choice = _T_Choice

export type Composite_Expression = _T_Composite_Expression

export type Grammar = _T_Grammar

export type Item = _T_Item

export type String_Literal = _T_String_Literal

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Char_Class_Element {
    
    export namespace SG {
        export type char = string
        
        export namespace char_code {
        }
        export type char_code = _T_Char_Code
        
        export namespace char_code_range {
            
            export namespace _from {
            }
            export type _from = _T_Char_Code
            
            export namespace to {
            }
            export type to = _T_Char_Code
        }
        export type char_code_range = {
            readonly 'from': _T_Char_Code
            readonly 'to': _T_Char_Code
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
        | readonly ['char code', _T_Char_Code]
        | readonly ['char code range', {
            readonly 'from': _T_Char_Code
            readonly 'to': _T_Char_Code
        }]
        | readonly ['char range', {
            readonly 'from': string
            readonly 'to': string
        }]
}

export namespace _T_Choice {
    
    export namespace first {
    }
    export type first = _T_Composite_Expression
    
    export namespace rest {
        
        export namespace L {
        }
        export type L = _T_Composite_Expression
    }
    export type rest = _i_core._T_List<null, _T_Composite_Expression>
}

export namespace _T_Composite_Expression {
    
    export namespace head {
    }
    export type head = _T_Item
    
    export namespace tail {
        
        export namespace O {
            
            export namespace SG {
                
                export namespace siblings {
                    
                    export namespace items {
                        
                        export namespace L {
                        }
                        export type L = _T_Item
                    }
                    export type items = _i_core._T_List<null, _T_Item>
                }
                export type siblings = {
                    readonly 'items': _i_core._T_List<null, _T_Item>
                }
                
                export namespace special {
                    
                    export namespace item {
                    }
                    export type item = _T_Item
                    
                    export namespace operator {
                        
                        export namespace SG {
                            export type $sr_$sr_ = null
                            export type $pl_$pl_ = null
                            export type $mi_ = null
                        }
                        export type SG = 
                            | readonly ['**', null]
                            | readonly ['++', null]
                            | readonly ['-', null]
                    }
                    export type operator = _i_core._T_State_Group<null, 
                        | readonly ['**', null]
                        | readonly ['++', null]
                        | readonly ['-', null]
                    >
                }
                export type special = {
                    readonly 'item': _T_Item
                    readonly 'operator': _i_core._T_State_Group<null, 
                        | readonly ['**', null]
                        | readonly ['++', null]
                        | readonly ['-', null]
                    >
                }
            }
            export type SG = 
                | readonly ['siblings', {
                    readonly 'items': _i_core._T_List<null, _T_Item>
                }]
                | readonly ['special', {
                    readonly 'item': _T_Item
                    readonly 'operator': _i_core._T_State_Group<null, 
                        | readonly ['**', null]
                        | readonly ['++', null]
                        | readonly ['-', null]
                    >
                }]
        }
        export type O = _i_core._T_State_Group<null, 
            | readonly ['siblings', {
                readonly 'items': _i_core._T_List<null, _T_Item>
            }]
            | readonly ['special', {
                readonly 'item': _T_Item
                readonly 'operator': _i_core._T_State_Group<null, 
                    | readonly ['**', null]
                    | readonly ['++', null]
                    | readonly ['-', null]
                >
            }]
        >
    }
    export type tail = _pt.Optional_Value<_i_core._T_State_Group<null, 
        | readonly ['siblings', {
            readonly 'items': _i_core._T_List<null, _T_Item>
        }]
        | readonly ['special', {
            readonly 'item': _T_Item
            readonly 'operator': _i_core._T_State_Group<null, 
                | readonly ['**', null]
                | readonly ['++', null]
                | readonly ['-', null]
            >
        }]
    >>
}

export namespace _T_Grammar {
    
    export namespace productions {
        
        export namespace L {
            
            export namespace definition {
                
                export namespace SG {
                    
                    export namespace choice {
                    }
                    export type choice = _T_Choice
                    
                    export namespace link {
                        export type url = string
                    }
                    export type link = {
                        readonly 'url': string
                    }
                }
                export type SG = 
                    | readonly ['choice', _T_Choice]
                    | readonly ['link', {
                        readonly 'url': string
                    }]
            }
            export type definition = _i_core._T_State_Group<null, 
                | readonly ['choice', _T_Choice]
                | readonly ['link', {
                    readonly 'url': string
                }]
            >
            export type name = string
        }
        export type L = {
            readonly 'definition': _i_core._T_State_Group<null, 
                | readonly ['choice', _T_Choice]
                | readonly ['link', {
                    readonly 'url': string
                }]
            >
            readonly 'name': string
        }
    }
    export type productions = _i_core._T_List<null, {
        readonly 'definition': _i_core._T_State_Group<null, 
            | readonly ['choice', _T_Choice]
            | readonly ['link', {
                readonly 'url': string
            }]
        >
        readonly 'name': string
    }>
}

export namespace _T_Item {
    
    export namespace primary {
        
        export namespace SG {
            
            export namespace char_class {
                
                export namespace first {
                }
                export type first = _T_Char_Class_Element
                export type negated = boolean
                
                export namespace rest {
                    
                    export namespace L {
                    }
                    export type L = _T_Char_Class_Element
                }
                export type rest = _i_core._T_List<null, _T_Char_Class_Element>
            }
            export type char_class = {
                readonly 'first': _T_Char_Class_Element
                readonly 'negated': boolean
                readonly 'rest': _i_core._T_List<null, _T_Char_Class_Element>
            }
            
            export namespace char_code {
            }
            export type char_code = _T_Char_Code
            
            export namespace choice {
            }
            export type choice = _T_Choice
            export type name = string
            
            export namespace string_literal {
            }
            export type string_literal = _T_String_Literal
        }
        export type SG = 
            | readonly ['char class', {
                readonly 'first': _T_Char_Class_Element
                readonly 'negated': boolean
                readonly 'rest': _i_core._T_List<null, _T_Char_Class_Element>
            }]
            | readonly ['char code', _T_Char_Code]
            | readonly ['choice', _T_Choice]
            | readonly ['name', string]
            | readonly ['string literal', _T_String_Literal]
    }
    export type primary = _i_core._T_State_Group<null, 
        | readonly ['char class', {
            readonly 'first': _T_Char_Class_Element
            readonly 'negated': boolean
            readonly 'rest': _i_core._T_List<null, _T_Char_Class_Element>
        }]
        | readonly ['char code', _T_Char_Code]
        | readonly ['choice', _T_Choice]
        | readonly ['name', string]
        | readonly ['string literal', _T_String_Literal]
    >
    
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
}

export namespace _T_String_Literal {
    
    export namespace delimiter {
        
        export namespace SG {
            export type apostrophe = string
            export type quote = string
        }
        export type SG = 
            | readonly ['apostrophe', string]
            | readonly ['quote', string]
    }
    export type delimiter = _i_core._T_State_Group<null, 
        | readonly ['apostrophe', string]
        | readonly ['quote', string]
    >
}

// *** ALIASES FOR NESTED TYPES

export namespace Char_Class_Element {
    
    export namespace SG {
        export type char = string
        
        export namespace char_code {
        }
        export type char_code = _T_Char_Code
        
        export namespace char_code_range {
            
            export namespace _from {
            }
            export type _from = _T_Char_Code
            
            export namespace to {
            }
            export type to = _T_Char_Code
        }
        export type char_code_range = {
            readonly 'from': _T_Char_Code
            readonly 'to': _T_Char_Code
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
        | readonly ['char code', _T_Char_Code]
        | readonly ['char code range', {
            readonly 'from': _T_Char_Code
            readonly 'to': _T_Char_Code
        }]
        | readonly ['char range', {
            readonly 'from': string
            readonly 'to': string
        }]
}

export namespace Choice {
    
    export namespace first {
    }
    export type first = _T_Composite_Expression
    
    export namespace rest {
        
        export namespace L {
        }
        export type L = _T_Composite_Expression
    }
    export type rest = _i_core._T_List<null, _T_Composite_Expression>
}

export namespace Composite_Expression {
    
    export namespace head {
    }
    export type head = _T_Item
    
    export namespace tail {
        
        export namespace O {
            
            export namespace SG {
                
                export namespace siblings {
                    
                    export namespace items {
                        
                        export namespace L {
                        }
                        export type L = _T_Item
                    }
                    export type items = _i_core._T_List<null, _T_Item>
                }
                export type siblings = {
                    readonly 'items': _i_core._T_List<null, _T_Item>
                }
                
                export namespace special {
                    
                    export namespace item {
                    }
                    export type item = _T_Item
                    
                    export namespace operator {
                        
                        export namespace SG {
                            export type $sr_$sr_ = null
                            export type $pl_$pl_ = null
                            export type $mi_ = null
                        }
                        export type SG = 
                            | readonly ['**', null]
                            | readonly ['++', null]
                            | readonly ['-', null]
                    }
                    export type operator = _i_core._T_State_Group<null, 
                        | readonly ['**', null]
                        | readonly ['++', null]
                        | readonly ['-', null]
                    >
                }
                export type special = {
                    readonly 'item': _T_Item
                    readonly 'operator': _i_core._T_State_Group<null, 
                        | readonly ['**', null]
                        | readonly ['++', null]
                        | readonly ['-', null]
                    >
                }
            }
            export type SG = 
                | readonly ['siblings', {
                    readonly 'items': _i_core._T_List<null, _T_Item>
                }]
                | readonly ['special', {
                    readonly 'item': _T_Item
                    readonly 'operator': _i_core._T_State_Group<null, 
                        | readonly ['**', null]
                        | readonly ['++', null]
                        | readonly ['-', null]
                    >
                }]
        }
        export type O = _i_core._T_State_Group<null, 
            | readonly ['siblings', {
                readonly 'items': _i_core._T_List<null, _T_Item>
            }]
            | readonly ['special', {
                readonly 'item': _T_Item
                readonly 'operator': _i_core._T_State_Group<null, 
                    | readonly ['**', null]
                    | readonly ['++', null]
                    | readonly ['-', null]
                >
            }]
        >
    }
    export type tail = _pt.Optional_Value<_i_core._T_State_Group<null, 
        | readonly ['siblings', {
            readonly 'items': _i_core._T_List<null, _T_Item>
        }]
        | readonly ['special', {
            readonly 'item': _T_Item
            readonly 'operator': _i_core._T_State_Group<null, 
                | readonly ['**', null]
                | readonly ['++', null]
                | readonly ['-', null]
            >
        }]
    >>
}

export namespace Grammar {
    
    export namespace productions {
        
        export namespace L {
            
            export namespace definition {
                
                export namespace SG {
                    
                    export namespace choice {
                    }
                    export type choice = _T_Choice
                    
                    export namespace link {
                        export type url = string
                    }
                    export type link = {
                        readonly 'url': string
                    }
                }
                export type SG = 
                    | readonly ['choice', _T_Choice]
                    | readonly ['link', {
                        readonly 'url': string
                    }]
            }
            export type definition = _i_core._T_State_Group<null, 
                | readonly ['choice', _T_Choice]
                | readonly ['link', {
                    readonly 'url': string
                }]
            >
            export type name = string
        }
        export type L = {
            readonly 'definition': _i_core._T_State_Group<null, 
                | readonly ['choice', _T_Choice]
                | readonly ['link', {
                    readonly 'url': string
                }]
            >
            readonly 'name': string
        }
    }
    export type productions = _i_core._T_List<null, {
        readonly 'definition': _i_core._T_State_Group<null, 
            | readonly ['choice', _T_Choice]
            | readonly ['link', {
                readonly 'url': string
            }]
        >
        readonly 'name': string
    }>
}

export namespace Item {
    
    export namespace primary {
        
        export namespace SG {
            
            export namespace char_class {
                
                export namespace first {
                }
                export type first = _T_Char_Class_Element
                export type negated = boolean
                
                export namespace rest {
                    
                    export namespace L {
                    }
                    export type L = _T_Char_Class_Element
                }
                export type rest = _i_core._T_List<null, _T_Char_Class_Element>
            }
            export type char_class = {
                readonly 'first': _T_Char_Class_Element
                readonly 'negated': boolean
                readonly 'rest': _i_core._T_List<null, _T_Char_Class_Element>
            }
            
            export namespace char_code {
            }
            export type char_code = _T_Char_Code
            
            export namespace choice {
            }
            export type choice = _T_Choice
            export type name = string
            
            export namespace string_literal {
            }
            export type string_literal = _T_String_Literal
        }
        export type SG = 
            | readonly ['char class', {
                readonly 'first': _T_Char_Class_Element
                readonly 'negated': boolean
                readonly 'rest': _i_core._T_List<null, _T_Char_Class_Element>
            }]
            | readonly ['char code', _T_Char_Code]
            | readonly ['choice', _T_Choice]
            | readonly ['name', string]
            | readonly ['string literal', _T_String_Literal]
    }
    export type primary = _i_core._T_State_Group<null, 
        | readonly ['char class', {
            readonly 'first': _T_Char_Class_Element
            readonly 'negated': boolean
            readonly 'rest': _i_core._T_List<null, _T_Char_Class_Element>
        }]
        | readonly ['char code', _T_Char_Code]
        | readonly ['choice', _T_Choice]
        | readonly ['name', string]
        | readonly ['string literal', _T_String_Literal]
    >
    
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
}

export namespace String_Literal {
    
    export namespace delimiter {
        
        export namespace SG {
            export type apostrophe = string
            export type quote = string
        }
        export type SG = 
            | readonly ['apostrophe', string]
            | readonly ['quote', string]
    }
    export type delimiter = _i_core._T_State_Group<null, 
        | readonly ['apostrophe', string]
        | readonly ['quote', string]
    >
}
