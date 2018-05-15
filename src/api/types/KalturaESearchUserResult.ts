
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUser } from './KalturaUser';
import { KalturaESearchResult, KalturaESearchResultArgs } from './KalturaESearchResult';

export interface KalturaESearchUserResultArgs  extends KalturaESearchResultArgs {
    object? : KalturaUser;
}


export class KalturaESearchUserResult extends KalturaESearchResult {

    object : KalturaUser;

    constructor(data? : KalturaESearchUserResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUserResult' },
				object : { type : 'o', subTypeConstructor : KalturaUser, subType : 'KalturaUser' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchUserResult',KalturaESearchUserResult);
