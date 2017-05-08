
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchResultResponse } from './KalturaSearchResultResponse';

import { KalturaSearch } from './KalturaSearch';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchSearchActionArgs  extends KalturaRequestArgs {
    search : KalturaSearch;
	pager? : KalturaFilterPager;
}

/** 
* Search for media in one of the supported media providers
**/
export class SearchSearchAction extends KalturaRequest<KalturaSearchResultResponse> {

    search : KalturaSearch;
	pager : KalturaFilterPager;

    constructor(data : SearchSearchActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSearchResultResponse', responseConstructor : KalturaSearchResultResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'search'  },
				action : { type : 'c' , default : 'search'  },
				search : { type : 'o'   , fallbackConstructor :  KalturaSearch, subType : 'KalturaSearch'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}
