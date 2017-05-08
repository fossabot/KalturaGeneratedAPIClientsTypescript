
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	flavorAsset : KalturaFlavorAsset;
}

/** 
* Update flavor asset
**/
export class FlavorAssetUpdateAction extends KalturaRequest<KalturaFlavorAsset> {

    id : string;
	flavorAsset : KalturaFlavorAsset;

    constructor(data : FlavorAssetUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorAsset', responseConstructor : KalturaFlavorAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				flavorAsset : { type : 'o', subTypeConstructor : KalturaFlavorAsset, subType : 'KalturaFlavorAsset' }
            }
        );
        return result;
    }
}

