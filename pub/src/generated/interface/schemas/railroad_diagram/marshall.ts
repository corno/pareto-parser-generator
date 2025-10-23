import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Char_Class_Element = (
    $$_: _i_in._T_Char_Class_Element,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Char_Code = (
    $$_: _i_in._T_Char_Code,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Choice = (
    $$_: _i_in._T_Choice,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Composite_Expression = (
    $$_: _i_in._T_Composite_Expression,
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

export type _T_Item = (
    $$_: _i_in._T_Item,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_String_Literal = (
    $$_: _i_in._T_String_Literal,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

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
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Char_Class_Element
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Char_Code {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Char_Code
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Choice {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Choice
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Composite_Expression {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Composite_Expression
    
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

export namespace _T_Item {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Item
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_String_Literal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Literal
    
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

export namespace Char_Class_Element {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Char_Class_Element
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Char_Code {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Char_Code
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Choice {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Choice
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Composite_Expression {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Composite_Expression
    
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

export namespace Item {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Item
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace String_Literal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Literal
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
