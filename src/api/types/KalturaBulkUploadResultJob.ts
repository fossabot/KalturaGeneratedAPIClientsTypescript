
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadResultJobArgs  extends KalturaBulkUploadResultArgs {
    jobObjectId? : number;
}


export class KalturaBulkUploadResultJob extends KalturaBulkUploadResult {

    jobObjectId : number;

    constructor(data? : KalturaBulkUploadResultJobArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResultJob' },
				jobObjectId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResultJob',KalturaBulkUploadResultJob);
