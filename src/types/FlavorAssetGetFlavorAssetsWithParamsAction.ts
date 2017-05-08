
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAssetWithParams } from './KalturaFlavorAssetWithParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetFlavorAssetsWithParamsActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/** 
* Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist
* without Flavor Asset & vice versa)
**/
export class FlavorAssetGetFlavorAssetsWithParamsAction extends KalturaRequest<KalturaFlavorAssetWithParams[]> {

    entryId : string;

    constructor(data : FlavorAssetGetFlavorAssetsWithParamsActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaFlavorAssetWithParams', responseConstructor : KalturaFlavorAssetWithParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'getFlavorAssetsWithParams' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

