
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLikeListResponse } from './KalturaLikeListResponse';

import { KalturaLikeFilter } from './KalturaLikeFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LikeListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaLikeFilter;
	pager? : KalturaFilterPager;
}


export class LikeListAction extends KalturaRequest<KalturaLikeListResponse> {

    filter : KalturaLikeFilter;
	pager : KalturaFilterPager;

    constructor(data? : LikeListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLikeListResponse', responseConstructor : KalturaLikeListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'like_like'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaLikeFilter, subType : 'KalturaLikeFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}
