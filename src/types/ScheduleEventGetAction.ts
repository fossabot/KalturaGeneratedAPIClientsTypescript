
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventGetActionArgs  extends KalturaRequestArgs {
    scheduleEventId : number;
}

/** 
* Retrieve a KalturaScheduleEvent object by ID
**/
export class ScheduleEventGetAction extends KalturaRequest<KalturaScheduleEvent> {

    scheduleEventId : number;

    constructor(data : ScheduleEventGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaScheduleEvent', responseConstructor : KalturaScheduleEvent  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'schedule_scheduleevent' },
				action : { type : 'c', default : 'get' },
				scheduleEventId : { type : 'n' }
            }
        );
        return result;
    }
}

