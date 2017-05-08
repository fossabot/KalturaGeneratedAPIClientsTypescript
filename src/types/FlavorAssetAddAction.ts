
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	flavorAsset : KalturaFlavorAsset;
}

/** 
* Add flavor asset
**/
export class FlavorAssetAddAction extends KalturaRequest<KalturaFlavorAsset> {

    entryId : string;
	flavorAsset : KalturaFlavorAsset;

    constructor(data : FlavorAssetAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorAsset', responseConstructor : KalturaFlavorAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorasset'  },
				action : { type : 'c' , default : 'add'  },
				entryId : { type : 's'   },
				flavorAsset : { type : 'o'   , fallbackConstructor :  KalturaFlavorAsset, subType : 'KalturaFlavorAsset'}
            }
        );
        return result;
    }
}
