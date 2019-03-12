
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGroup } from './KalturaGroup';
import { KalturaESearchResult, KalturaESearchResultArgs } from './KalturaESearchResult';

export interface KalturaESearchGroupResultArgs  extends KalturaESearchResultArgs {
    object? : KalturaGroup;
}


export class KalturaESearchGroupResult extends KalturaESearchResult {

    object : KalturaGroup;

    constructor(data? : KalturaESearchGroupResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchGroupResult' },
				object : { type : 'o', subTypeConstructor : KalturaGroup, subType : 'KalturaGroup' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchGroupResult',KalturaESearchGroupResult);
