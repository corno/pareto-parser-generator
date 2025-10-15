import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Char_Class_Option = (
    $$_: _i_in._T_Char_Class_Option,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Context = (
    $$_: _i_in._T_Context,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Context_Expression = (
    $$_: _i_in._T_Context_Expression,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Equivalence_Char_Range = (
    $$_: _i_in._T_Equivalence_Char_Range,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Grammar = (
    $$_: _i_in._T_Grammar,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Lexical_Item = (
    $$_: _i_in._T_Lexical_Item,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Lexical_Sequence = (
    $$_: _i_in._T_Lexical_Sequence,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Name_Or_String = (
    $$_: _i_in._T_Name_Or_String,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Processing_Instruction = (
    $$_: _i_in._T_Processing_Instruction,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Syntax_Choice = (
    $$_: _i_in._T_Syntax_Choice,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Syntax_Production = (
    $$_: _i_in._T_Syntax_Production,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Syntax_Sequence = (
    $$_: _i_in._T_Syntax_Sequence,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Whitespace_Option = (
    $$_: _i_in._T_Whitespace_Option,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

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
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Char_Class_Option
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Context {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Context
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Context_Expression {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Context_Expression
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Equivalence_Char_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Equivalence_Char_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Grammar {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Grammar
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Lexical_Item {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lexical_Item
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Lexical_Sequence {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lexical_Sequence
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Name_Or_String {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Name_Or_String
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Processing_Instruction {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Processing_Instruction
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Syntax_Choice {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Syntax_Choice
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Syntax_Production {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Syntax_Production
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Syntax_Sequence {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Syntax_Sequence
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Whitespace_Option {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Whitespace_Option
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Char_Class_Option {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Char_Class_Option
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Context {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Context
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Context_Expression {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Context_Expression
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Equivalence_Char_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Equivalence_Char_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Grammar {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Grammar
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Lexical_Item {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lexical_Item
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Lexical_Sequence {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lexical_Sequence
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Name_Or_String {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Name_Or_String
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Processing_Instruction {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Processing_Instruction
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Syntax_Choice {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Syntax_Choice
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Syntax_Production {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Syntax_Production
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Syntax_Sequence {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Syntax_Sequence
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Whitespace_Option {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Whitespace_Option
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
