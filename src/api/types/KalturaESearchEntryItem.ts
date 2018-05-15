
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchEntryFieldName } from './KalturaESearchEntryFieldName';
import { KalturaESearchAbstractEntryItem, KalturaESearchAbstractEntryItemArgs } from './KalturaESearchAbstractEntryItem';

export interface KalturaESearchEntryItemArgs  extends KalturaESearchAbstractEntryItemArgs {
    fieldName? : KalturaESearchEntryFieldName;
}


export class KalturaESearchEntryItem extends KalturaESearchAbstractEntryItem {

    fieldName : KalturaESearchEntryFieldName;

    constructor(data? : KalturaESearchEntryItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchEntryFieldName, subType : 'KalturaESearchEntryFieldName' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchEntryItem',KalturaESearchEntryItem);
