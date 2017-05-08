
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResourceListResponse } from './KalturaScheduleEventResourceListResponse';

import { KalturaScheduleEventResourceFilter } from './KalturaScheduleEventResourceFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventResourceListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaScheduleEventResourceFilter;
	pager? : KalturaFilterPager;
}

/** 
* List KalturaScheduleEventResource objects
**/
export class ScheduleEventResourceListAction extends KalturaRequest<KalturaScheduleEventResourceListResponse> {

    filter : KalturaScheduleEventResourceFilter;
	pager : KalturaFilterPager;

    constructor(data? : ScheduleEventResourceListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleEventResourceListResponse', responseConstructor : KalturaScheduleEventResourceListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleeventresource' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaScheduleEventResourceFilter, subType : 'KalturaScheduleEventResourceFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

