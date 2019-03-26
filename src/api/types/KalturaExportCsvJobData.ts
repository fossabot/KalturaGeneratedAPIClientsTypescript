
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaExportCsvJobDataArgs  extends KalturaJobDataArgs {
    userName? : string;
	userMail? : string;
	outputPath? : string;
}


export class KalturaExportCsvJobData extends KalturaJobData {

    userName : string;
	userMail : string;
	outputPath : string;

    constructor(data? : KalturaExportCsvJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExportCsvJobData' },
				userName : { type : 's' },
				userMail : { type : 's' },
				outputPath : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExportCsvJobData',KalturaExportCsvJobData);
