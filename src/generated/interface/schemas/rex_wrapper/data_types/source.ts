import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Fixed_token_sequence = _i_core._T_List<null, {
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['alternatives', _i_core._T_Dictionary<null, _T_Fixed_token_sequence>]
        | readonly ['optional', _T_Fixed_token_sequence]
        | readonly ['token', string]
    >
}>

export type _T_Grammar = {
    readonly 'dynamic tokens': _i_core._T_Dictionary<null, null>
    readonly 'types': _i_core._T_Dictionary<null, {
        readonly 'node': _T_Type_Node
    }>
}

export type _T_Type_Node = {
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['component', {
            readonly 'prefix': _T_Fixed_token_sequence
            readonly 'type': string
        }]
        | readonly ['group', {
            readonly 'properties': _i_core._T_Dictionary<null, {
                readonly 'node': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
            }>
        }]
        | readonly ['list', {
            readonly 'elements': _T_Type_Node
            readonly 'prefix': _T_Fixed_token_sequence
            readonly 'separator': _T_Fixed_token_sequence
            readonly 'suffix': _T_Fixed_token_sequence
        }]
        | readonly ['optional', {
            readonly 'not set': {
                readonly 'tokens': _T_Fixed_token_sequence
            }
            readonly 'set': {
                readonly 'node': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
            }
        }]
        | readonly ['state group', {
            readonly 'prefix': _T_Fixed_token_sequence
            readonly 'states': _i_core._T_Dictionary<null, {
                readonly 'node': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
            }>
        }]
        | readonly ['text', {
            readonly 'dynamic token': string
            readonly 'prefix': _T_Fixed_token_sequence
        }]
    >
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Fixed_token_sequence = _T_Fixed_token_sequence

export type Grammar = _T_Grammar

export type Type_Node = _T_Type_Node

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Fixed_token_sequence {
    
    export namespace L {
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace alternatives {
                    
                    export namespace D {
                    }
                    export type D = _T_Fixed_token_sequence
                }
                export type alternatives = _i_core._T_Dictionary<null, _T_Fixed_token_sequence>
                
                export namespace optional {
                }
                export type optional = _T_Fixed_token_sequence
                export type token = string
            }
            export type SG = 
                | readonly ['alternatives', _i_core._T_Dictionary<null, _T_Fixed_token_sequence>]
                | readonly ['optional', _T_Fixed_token_sequence]
                | readonly ['token', string]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['alternatives', _i_core._T_Dictionary<null, _T_Fixed_token_sequence>]
            | readonly ['optional', _T_Fixed_token_sequence]
            | readonly ['token', string]
        >
    }
    export type L = {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['alternatives', _i_core._T_Dictionary<null, _T_Fixed_token_sequence>]
            | readonly ['optional', _T_Fixed_token_sequence]
            | readonly ['token', string]
        >
    }
}

export namespace _T_Grammar {
    
    export namespace dynamic_tokens {
        
        export namespace D {
        }
        export type D = null
    }
    export type dynamic_tokens = _i_core._T_Dictionary<null, null>
    
    export namespace types {
        
        export namespace D {
            
            export namespace node {
            }
            export type node = _T_Type_Node
        }
        export type D = {
            readonly 'node': _T_Type_Node
        }
    }
    export type types = _i_core._T_Dictionary<null, {
        readonly 'node': _T_Type_Node
    }>
}

export namespace _T_Type_Node {
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace component {
                
                export namespace prefix {
                }
                export type prefix = _T_Fixed_token_sequence
                export type _type = string
            }
            export type component = {
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'type': string
            }
            
            export namespace group {
                
                export namespace properties {
                    
                    export namespace D {
                        
                        export namespace node {
                        }
                        export type node = _T_Type_Node
                        
                        export namespace prefix {
                        }
                        export type prefix = _T_Fixed_token_sequence
                    }
                    export type D = {
                        readonly 'node': _T_Type_Node
                        readonly 'prefix': _T_Fixed_token_sequence
                    }
                }
                export type properties = _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }
            export type group = {
                readonly 'properties': _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }
            
            export namespace list {
                
                export namespace elements {
                }
                export type elements = _T_Type_Node
                
                export namespace prefix {
                }
                export type prefix = _T_Fixed_token_sequence
                
                export namespace separator {
                }
                export type separator = _T_Fixed_token_sequence
                
                export namespace suffix {
                }
                export type suffix = _T_Fixed_token_sequence
            }
            export type list = {
                readonly 'elements': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'separator': _T_Fixed_token_sequence
                readonly 'suffix': _T_Fixed_token_sequence
            }
            
            export namespace optional {
                
                export namespace not_set {
                    
                    export namespace tokens {
                    }
                    export type tokens = _T_Fixed_token_sequence
                }
                export type not_set = {
                    readonly 'tokens': _T_Fixed_token_sequence
                }
                
                export namespace _set {
                    
                    export namespace node {
                    }
                    export type node = _T_Type_Node
                    
                    export namespace prefix {
                    }
                    export type prefix = _T_Fixed_token_sequence
                }
                export type _set = {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }
            }
            export type optional = {
                readonly 'not set': {
                    readonly 'tokens': _T_Fixed_token_sequence
                }
                readonly 'set': {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }
            }
            
            export namespace state_group {
                
                export namespace prefix {
                }
                export type prefix = _T_Fixed_token_sequence
                
                export namespace states {
                    
                    export namespace D {
                        
                        export namespace node {
                        }
                        export type node = _T_Type_Node
                        
                        export namespace prefix {
                        }
                        export type prefix = _T_Fixed_token_sequence
                    }
                    export type D = {
                        readonly 'node': _T_Type_Node
                        readonly 'prefix': _T_Fixed_token_sequence
                    }
                }
                export type states = _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }
            export type state_group = {
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }
            
            export namespace text {
                export type dynamic_token = string
                
                export namespace prefix {
                }
                export type prefix = _T_Fixed_token_sequence
            }
            export type text = {
                readonly 'dynamic token': string
                readonly 'prefix': _T_Fixed_token_sequence
            }
        }
        export type SG = 
            | readonly ['component', {
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'type': string
            }]
            | readonly ['group', {
                readonly 'properties': _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }]
            | readonly ['list', {
                readonly 'elements': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'separator': _T_Fixed_token_sequence
                readonly 'suffix': _T_Fixed_token_sequence
            }]
            | readonly ['optional', {
                readonly 'not set': {
                    readonly 'tokens': _T_Fixed_token_sequence
                }
                readonly 'set': {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }
            }]
            | readonly ['state group', {
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }]
            | readonly ['text', {
                readonly 'dynamic token': string
                readonly 'prefix': _T_Fixed_token_sequence
            }]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['component', {
            readonly 'prefix': _T_Fixed_token_sequence
            readonly 'type': string
        }]
        | readonly ['group', {
            readonly 'properties': _i_core._T_Dictionary<null, {
                readonly 'node': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
            }>
        }]
        | readonly ['list', {
            readonly 'elements': _T_Type_Node
            readonly 'prefix': _T_Fixed_token_sequence
            readonly 'separator': _T_Fixed_token_sequence
            readonly 'suffix': _T_Fixed_token_sequence
        }]
        | readonly ['optional', {
            readonly 'not set': {
                readonly 'tokens': _T_Fixed_token_sequence
            }
            readonly 'set': {
                readonly 'node': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
            }
        }]
        | readonly ['state group', {
            readonly 'prefix': _T_Fixed_token_sequence
            readonly 'states': _i_core._T_Dictionary<null, {
                readonly 'node': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
            }>
        }]
        | readonly ['text', {
            readonly 'dynamic token': string
            readonly 'prefix': _T_Fixed_token_sequence
        }]
    >
}

// *** ALIASES FOR NESTED TYPES

export namespace Fixed_token_sequence {
    
    export namespace L {
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace alternatives {
                    
                    export namespace D {
                    }
                    export type D = _T_Fixed_token_sequence
                }
                export type alternatives = _i_core._T_Dictionary<null, _T_Fixed_token_sequence>
                
                export namespace optional {
                }
                export type optional = _T_Fixed_token_sequence
                export type token = string
            }
            export type SG = 
                | readonly ['alternatives', _i_core._T_Dictionary<null, _T_Fixed_token_sequence>]
                | readonly ['optional', _T_Fixed_token_sequence]
                | readonly ['token', string]
        }
        export type _type = _i_core._T_State_Group<null, 
            | readonly ['alternatives', _i_core._T_Dictionary<null, _T_Fixed_token_sequence>]
            | readonly ['optional', _T_Fixed_token_sequence]
            | readonly ['token', string]
        >
    }
    export type L = {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['alternatives', _i_core._T_Dictionary<null, _T_Fixed_token_sequence>]
            | readonly ['optional', _T_Fixed_token_sequence]
            | readonly ['token', string]
        >
    }
}

export namespace Grammar {
    
    export namespace dynamic_tokens {
        
        export namespace D {
        }
        export type D = null
    }
    export type dynamic_tokens = _i_core._T_Dictionary<null, null>
    
    export namespace types {
        
        export namespace D {
            
            export namespace node {
            }
            export type node = _T_Type_Node
        }
        export type D = {
            readonly 'node': _T_Type_Node
        }
    }
    export type types = _i_core._T_Dictionary<null, {
        readonly 'node': _T_Type_Node
    }>
}

export namespace Type_Node {
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace component {
                
                export namespace prefix {
                }
                export type prefix = _T_Fixed_token_sequence
                export type _type = string
            }
            export type component = {
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'type': string
            }
            
            export namespace group {
                
                export namespace properties {
                    
                    export namespace D {
                        
                        export namespace node {
                        }
                        export type node = _T_Type_Node
                        
                        export namespace prefix {
                        }
                        export type prefix = _T_Fixed_token_sequence
                    }
                    export type D = {
                        readonly 'node': _T_Type_Node
                        readonly 'prefix': _T_Fixed_token_sequence
                    }
                }
                export type properties = _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }
            export type group = {
                readonly 'properties': _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }
            
            export namespace list {
                
                export namespace elements {
                }
                export type elements = _T_Type_Node
                
                export namespace prefix {
                }
                export type prefix = _T_Fixed_token_sequence
                
                export namespace separator {
                }
                export type separator = _T_Fixed_token_sequence
                
                export namespace suffix {
                }
                export type suffix = _T_Fixed_token_sequence
            }
            export type list = {
                readonly 'elements': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'separator': _T_Fixed_token_sequence
                readonly 'suffix': _T_Fixed_token_sequence
            }
            
            export namespace optional {
                
                export namespace not_set {
                    
                    export namespace tokens {
                    }
                    export type tokens = _T_Fixed_token_sequence
                }
                export type not_set = {
                    readonly 'tokens': _T_Fixed_token_sequence
                }
                
                export namespace _set {
                    
                    export namespace node {
                    }
                    export type node = _T_Type_Node
                    
                    export namespace prefix {
                    }
                    export type prefix = _T_Fixed_token_sequence
                }
                export type _set = {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }
            }
            export type optional = {
                readonly 'not set': {
                    readonly 'tokens': _T_Fixed_token_sequence
                }
                readonly 'set': {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }
            }
            
            export namespace state_group {
                
                export namespace prefix {
                }
                export type prefix = _T_Fixed_token_sequence
                
                export namespace states {
                    
                    export namespace D {
                        
                        export namespace node {
                        }
                        export type node = _T_Type_Node
                        
                        export namespace prefix {
                        }
                        export type prefix = _T_Fixed_token_sequence
                    }
                    export type D = {
                        readonly 'node': _T_Type_Node
                        readonly 'prefix': _T_Fixed_token_sequence
                    }
                }
                export type states = _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }
            export type state_group = {
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }
            
            export namespace text {
                export type dynamic_token = string
                
                export namespace prefix {
                }
                export type prefix = _T_Fixed_token_sequence
            }
            export type text = {
                readonly 'dynamic token': string
                readonly 'prefix': _T_Fixed_token_sequence
            }
        }
        export type SG = 
            | readonly ['component', {
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'type': string
            }]
            | readonly ['group', {
                readonly 'properties': _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }]
            | readonly ['list', {
                readonly 'elements': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'separator': _T_Fixed_token_sequence
                readonly 'suffix': _T_Fixed_token_sequence
            }]
            | readonly ['optional', {
                readonly 'not set': {
                    readonly 'tokens': _T_Fixed_token_sequence
                }
                readonly 'set': {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }
            }]
            | readonly ['state group', {
                readonly 'prefix': _T_Fixed_token_sequence
                readonly 'states': _i_core._T_Dictionary<null, {
                    readonly 'node': _T_Type_Node
                    readonly 'prefix': _T_Fixed_token_sequence
                }>
            }]
            | readonly ['text', {
                readonly 'dynamic token': string
                readonly 'prefix': _T_Fixed_token_sequence
            }]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['component', {
            readonly 'prefix': _T_Fixed_token_sequence
            readonly 'type': string
        }]
        | readonly ['group', {
            readonly 'properties': _i_core._T_Dictionary<null, {
                readonly 'node': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
            }>
        }]
        | readonly ['list', {
            readonly 'elements': _T_Type_Node
            readonly 'prefix': _T_Fixed_token_sequence
            readonly 'separator': _T_Fixed_token_sequence
            readonly 'suffix': _T_Fixed_token_sequence
        }]
        | readonly ['optional', {
            readonly 'not set': {
                readonly 'tokens': _T_Fixed_token_sequence
            }
            readonly 'set': {
                readonly 'node': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
            }
        }]
        | readonly ['state group', {
            readonly 'prefix': _T_Fixed_token_sequence
            readonly 'states': _i_core._T_Dictionary<null, {
                readonly 'node': _T_Type_Node
                readonly 'prefix': _T_Fixed_token_sequence
            }>
        }]
        | readonly ['text', {
            readonly 'dynamic token': string
            readonly 'prefix': _T_Fixed_token_sequence
        }]
    >
}
