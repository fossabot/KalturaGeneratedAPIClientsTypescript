
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetDistributionCondition, KalturaAssetDistributionConditionArgs } from './KalturaAssetDistributionCondition';

export interface KalturaAssetDistributionPropertyConditionArgs  extends KalturaAssetDistributionConditionArgs {
    propertyName? : string;
	propertyValue? : string;
}

/** 
* Defines the condition to match a property and value on core asset object (or one
* if its inherited objects)
**/
export class KalturaAssetDistributionPropertyCondition extends KalturaAssetDistributionCondition {

    propertyName : string;
	propertyValue : string;

    constructor(data? : KalturaAssetDistributionPropertyConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetDistributionPropertyCondition' },
				propertyName : { type : 's' },
				propertyValue : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetDistributionPropertyCondition',KalturaAssetDistributionPropertyCondition);
