
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRecordScheduleEventBaseFilter, KalturaRecordScheduleEventBaseFilterArgs } from './KalturaRecordScheduleEventBaseFilter';

export interface KalturaBlackoutScheduleEventFilterArgs  extends KalturaRecordScheduleEventBaseFilterArgs {
    
}


export class KalturaBlackoutScheduleEventFilter extends KalturaRecordScheduleEventBaseFilter {

    

    constructor(data? : KalturaBlackoutScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBlackoutScheduleEventFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBlackoutScheduleEventFilter',KalturaBlackoutScheduleEventFilter);
