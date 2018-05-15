
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchBaseItem, KalturaESearchBaseItemArgs } from './KalturaESearchBaseItem';

export interface KalturaESearchEntryBaseItemArgs  extends KalturaESearchBaseItemArgs {
    
}


export class KalturaESearchEntryBaseItem extends KalturaESearchBaseItem {

    

    constructor(data? : KalturaESearchEntryBaseItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryBaseItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchEntryBaseItem',KalturaESearchEntryBaseItem);
