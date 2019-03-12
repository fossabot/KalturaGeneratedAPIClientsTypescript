
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchGroupOperator } from './KalturaESearchGroupOperator';
import { KalturaESearchParams, KalturaESearchParamsArgs } from './KalturaESearchParams';

export interface KalturaESearchGroupParamsArgs  extends KalturaESearchParamsArgs {
    searchOperator? : KalturaESearchGroupOperator;
}


export class KalturaESearchGroupParams extends KalturaESearchParams {

    searchOperator : KalturaESearchGroupOperator;

    constructor(data? : KalturaESearchGroupParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchGroupParams' },
				searchOperator : { type : 'o', subTypeConstructor : KalturaESearchGroupOperator, subType : 'KalturaESearchGroupOperator' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchGroupParams',KalturaESearchGroupParams);
