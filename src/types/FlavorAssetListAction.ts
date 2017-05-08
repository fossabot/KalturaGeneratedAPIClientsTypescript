
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAssetListResponse } from './KalturaFlavorAssetListResponse';

import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAssetFilter;
	pager? : KalturaFilterPager;
}

/** 
* List Flavor Assets by filter and pager
**/
export class FlavorAssetListAction extends KalturaRequest<KalturaFlavorAssetListResponse> {

    filter : KalturaAssetFilter;
	pager : KalturaFilterPager;

    constructor(data? : FlavorAssetListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaFlavorAssetListResponse', responseConstructor : KalturaFlavorAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorasset'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaAssetFilter, subType : 'KalturaAssetFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}
