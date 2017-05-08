
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsAddActionArgs  extends KalturaRequestArgs {
    flavorParams : KalturaFlavorParams;
}

/** 
* Add new Flavor Params
**/
export class FlavorParamsAddAction extends KalturaRequest<KalturaFlavorParams> {

    flavorParams : KalturaFlavorParams;

    constructor(data : FlavorParamsAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorParams', responseConstructor : KalturaFlavorParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorparams'  },
				action : { type : 'c' , default : 'add'  },
				flavorParams : { type : 'o'   , fallbackConstructor :  KalturaFlavorParams, subType : 'KalturaFlavorParams'}
            }
        );
        return result;
    }
}
