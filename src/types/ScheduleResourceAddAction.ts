
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleResourceAddActionArgs  extends KalturaRequestArgs {
    scheduleResource : KalturaScheduleResource;
}

/** 
* Allows you to add a new KalturaScheduleResource object
**/
export class ScheduleResourceAddAction extends KalturaRequest<KalturaScheduleResource> {

    scheduleResource : KalturaScheduleResource;

    constructor(data : ScheduleResourceAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleResource', responseConstructor : KalturaScheduleResource  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleresource'  },
				action : { type : 'c' , default : 'add'  },
				scheduleResource : { type : 'o'   , fallbackConstructor :  KalturaScheduleResource, subType : 'KalturaScheduleResource'}
            }
        );
        return result;
    }
}
