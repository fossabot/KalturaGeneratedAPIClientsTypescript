
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfListResponse } from './KalturaUiConfListResponse';

import { KalturaUiConfFilter } from './KalturaUiConfFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UiConfListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUiConfFilter;
	pager? : KalturaFilterPager;
}

/** 
* Retrieve a list of available UIConfs
**/
export class UiConfListAction extends KalturaRequest<KalturaUiConfListResponse> {

    filter : KalturaUiConfFilter;
	pager : KalturaFilterPager;

    constructor(data? : UiConfListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUiConfListResponse', responseConstructor : KalturaUiConfListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'uiconf' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaUiConfFilter, subType : 'KalturaUiConfFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

