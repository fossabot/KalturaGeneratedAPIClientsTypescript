
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchResponse } from './KalturaESearchResponse';

import { KalturaESearchParams } from './KalturaESearchParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ESearchSearchCategoryActionArgs  extends KalturaRequestArgs {
    searchParams : KalturaESearchParams;
	pager? : KalturaPager;
}


export class ESearchSearchCategoryAction extends KalturaRequest<KalturaESearchResponse> {

    searchParams : KalturaESearchParams;
	pager : KalturaPager;

    constructor(data : ESearchSearchCategoryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaESearchResponse', responseConstructor : KalturaESearchResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'elasticsearch_esearch' },
				action : { type : 'c', default : 'searchCategory' },
				searchParams : { type : 'o', subTypeConstructor : KalturaESearchParams, subType : 'KalturaESearchParams' },
				pager : { type : 'o', subTypeConstructor : KalturaPager, subType : 'KalturaPager' }
            }
        );
        return result;
    }
}

