
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchBaseItem, KalturaESearchBaseItemArgs } from './KalturaESearchBaseItem';

export interface KalturaESearchUserBaseItemArgs  extends KalturaESearchBaseItemArgs {
    
}


export class KalturaESearchUserBaseItem extends KalturaESearchBaseItem {

    

    constructor(data? : KalturaESearchUserBaseItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUserBaseItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchUserBaseItem',KalturaESearchUserBaseItem);
