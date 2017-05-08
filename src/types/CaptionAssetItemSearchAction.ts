
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAssetItemListResponse } from './KalturaCaptionAssetItemListResponse';

import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetItemSearchActionArgs  extends KalturaRequestArgs {
    entryFilter? : KalturaBaseEntryFilter;
	captionAssetItemFilter? : KalturaCaptionAssetItemFilter;
	captionAssetItemPager? : KalturaFilterPager;
}

/** 
* Search caption asset items by filter, pager and free text
**/
export class CaptionAssetItemSearchAction extends KalturaRequest<KalturaCaptionAssetItemListResponse> {

    entryFilter : KalturaBaseEntryFilter;
	captionAssetItemFilter : KalturaCaptionAssetItemFilter;
	captionAssetItemPager : KalturaFilterPager;

    constructor(data? : CaptionAssetItemSearchActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCaptionAssetItemListResponse', responseConstructor : KalturaCaptionAssetItemListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'captionsearch_captionassetitem'  },
				action : { type : 'c' , default : 'search'  },
				entryFilter : { type : 'o'   , fallbackConstructor :  KalturaBaseEntryFilter, subType : 'KalturaBaseEntryFilter'},
				captionAssetItemFilter : { type : 'o'   , fallbackConstructor :  KalturaCaptionAssetItemFilter, subType : 'KalturaCaptionAssetItemFilter'},
				captionAssetItemPager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}
