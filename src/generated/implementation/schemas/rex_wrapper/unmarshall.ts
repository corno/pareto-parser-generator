import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/rex_wrapper/data_types/target"
import * as _i_signatures from "../../../interface/schemas/rex_wrapper/unmarshall"


export const Fixed_token_sequence: _i_signatures._T_Fixed_token_sequence = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'type': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "type",
                        }
                    ), ($) => _i_generic.process_unconstrained_state_group(
                        $,
                        {
                            'states': _pa.dictionary_literal({
                                'alternatives': ($): _i_out._T_Fixed_token_sequence.L._type.SG => ['alternatives', _i_generic.process_unconstrained_dictionary(
                                    $,
                                    {
                                        'value': ($) => Fixed_token_sequence(
                                            $,
                                            {
                                                'value deserializers': $p['value deserializers'],
                                            }
                                        ),
                                    }
                                )],
                                'optional': ($): _i_out._T_Fixed_token_sequence.L._type.SG => ['optional', Fixed_token_sequence(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )],
                                'token': ($): _i_out._T_Fixed_token_sequence.L._type.SG => ['token', _i_generic.process_text(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )),
                }),
            }
        ),
    }
)
export const Grammar: _i_signatures._T_Grammar = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'dynamic tokens': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "dynamic tokens",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => null,
                        }
                    ),
                }
            )),
            'types': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "types",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'node': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "node",
                                    }
                                ), ($) => Type_Node(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'component': ($): _i_out._T_Type_Node._type.SG => ['component', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'prefix': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "prefix",
                                        }
                                    ), ($) => Fixed_token_sequence(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'type': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "type",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                }),
                            }
                        )],
                        'group': ($): _i_out._T_Type_Node._type.SG => ['group', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'properties': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "properties",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'node': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "node",
                                                            }
                                                        ), ($) => Type_Node(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'prefix': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "prefix",
                                                            }
                                                        ), ($) => Fixed_token_sequence(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                    }),
                                                }
                                            ),
                                        }
                                    )),
                                }),
                            }
                        )],
                        'list': ($): _i_out._T_Type_Node._type.SG => ['list', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'elements': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "elements",
                                        }
                                    ), ($) => Type_Node(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'prefix': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "prefix",
                                        }
                                    ), ($) => Fixed_token_sequence(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'separator': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "separator",
                                        }
                                    ), ($) => Fixed_token_sequence(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'suffix': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "suffix",
                                        }
                                    ), ($) => Fixed_token_sequence(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'optional': ($): _i_out._T_Type_Node._type.SG => ['optional', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'not set': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "not set",
                                        }
                                    ), ($) => _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'tokens': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "tokens",
                                                    }
                                                ), ($) => Fixed_token_sequence(
                                                    $,
                                                    {
                                                        'value deserializers': $p['value deserializers'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )),
                                    'set': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "set",
                                        }
                                    ), ($) => _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'node': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "node",
                                                    }
                                                ), ($) => Type_Node(
                                                    $,
                                                    {
                                                        'value deserializers': $p['value deserializers'],
                                                    }
                                                )),
                                                'prefix': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "prefix",
                                                    }
                                                ), ($) => Fixed_token_sequence(
                                                    $,
                                                    {
                                                        'value deserializers': $p['value deserializers'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )),
                                }),
                            }
                        )],
                        'state group': ($): _i_out._T_Type_Node._type.SG => ['state group', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'prefix': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "prefix",
                                        }
                                    ), ($) => Fixed_token_sequence(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'states': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "states",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_dictionary(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'node': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "node",
                                                            }
                                                        ), ($) => Type_Node(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                        'prefix': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "prefix",
                                                            }
                                                        ), ($) => Fixed_token_sequence(
                                                            $,
                                                            {
                                                                'value deserializers': $p['value deserializers'],
                                                            }
                                                        )),
                                                    }),
                                                }
                                            ),
                                        }
                                    )),
                                }),
                            }
                        )],
                        'text': ($): _i_out._T_Type_Node._type.SG => ['text', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'dynamic token': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "dynamic token",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                    'prefix': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "prefix",
                                        }
                                    ), ($) => Fixed_token_sequence(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                    }),
                }
            )),
        }),
    }
)
