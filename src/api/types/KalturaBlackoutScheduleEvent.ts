
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEvent, KalturaScheduleEventArgs } from './KalturaScheduleEvent';

export interface KalturaBlackoutScheduleEventArgs  extends KalturaScheduleEventArgs {
    
}


export class KalturaBlackoutScheduleEvent extends KalturaScheduleEvent {

    

    constructor(data? : KalturaBlackoutScheduleEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBlackoutScheduleEvent' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBlackoutScheduleEvent',KalturaBlackoutScheduleEvent);
