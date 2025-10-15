import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Fixed_token_sequence = (
    $$_: _i_in._T_Fixed_token_sequence,
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

export type _T_Type_Node = (
    $$_: _i_in._T_Type_Node,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Fixed_token_sequence = _T_Fixed_token_sequence

export type Grammar = _T_Grammar

export type Type_Node = _T_Type_Node

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Fixed_token_sequence {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Fixed_token_sequence
    
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

export namespace _T_Type_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Node
    
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

export namespace Fixed_token_sequence {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Fixed_token_sequence
    
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

export namespace Type_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Node
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
