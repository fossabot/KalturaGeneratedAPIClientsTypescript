
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaBooleanEventNotificationConditionArgs  extends KalturaConditionArgs {
    booleanEventNotificationIds? : string;
}


export class KalturaBooleanEventNotificationCondition extends KalturaCondition {

    booleanEventNotificationIds : string;

    constructor(data? : KalturaBooleanEventNotificationConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBooleanEventNotificationCondition' },
				booleanEventNotificationIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBooleanEventNotificationCondition',KalturaBooleanEventNotificationCondition);
