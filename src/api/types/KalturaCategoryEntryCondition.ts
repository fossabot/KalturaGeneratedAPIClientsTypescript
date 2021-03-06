
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaCategoryEntryConditionArgs  extends KalturaConditionArgs {
    categoryId? : number;
	categoryUserPermission? : KalturaCategoryUserPermissionLevel;
	comparison? : KalturaSearchConditionComparison;
}


export class KalturaCategoryEntryCondition extends KalturaCondition {

    categoryId : number;
	categoryUserPermission : KalturaCategoryUserPermissionLevel;
	comparison : KalturaSearchConditionComparison;

    constructor(data? : KalturaCategoryEntryConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryEntryCondition' },
				categoryId : { type : 'n' },
				categoryUserPermission : { type : 'en', subTypeConstructor : KalturaCategoryUserPermissionLevel, subType : 'KalturaCategoryUserPermissionLevel' },
				comparison : { type : 'es', subTypeConstructor : KalturaSearchConditionComparison, subType : 'KalturaSearchConditionComparison' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryEntryCondition',KalturaCategoryEntryCondition);
