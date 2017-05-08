
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAssetListResponse } from './KalturaThumbAssetListResponse';

import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAssetFilter;
	pager? : KalturaFilterPager;
}

/** 
* List Thumbnail Assets by filter and pager
**/
export class ThumbAssetListAction extends KalturaRequest<KalturaThumbAssetListResponse> {

    filter : KalturaAssetFilter;
	pager : KalturaFilterPager;

    constructor(data? : ThumbAssetListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaThumbAssetListResponse', responseConstructor : KalturaThumbAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbasset'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaAssetFilter, subType : 'KalturaAssetFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}
