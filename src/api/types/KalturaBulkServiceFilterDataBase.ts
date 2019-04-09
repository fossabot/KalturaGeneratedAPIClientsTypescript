
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter } from './KalturaFilter';
import { KalturaBulkServiceData, KalturaBulkServiceDataArgs } from './KalturaBulkServiceData';

export interface KalturaBulkServiceFilterDataBaseArgs  extends KalturaBulkServiceDataArgs {
    filter? : KalturaFilter;
}


export class KalturaBulkServiceFilterDataBase extends KalturaBulkServiceData {

    filter : KalturaFilter;

    constructor(data? : KalturaBulkServiceFilterDataBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkServiceFilterDataBase' },
				filter : { type : 'o', subTypeConstructor : KalturaFilter, subType : 'KalturaFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkServiceFilterDataBase',KalturaBulkServiceFilterDataBase);
