
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportExportResponseArgs  extends KalturaObjectBaseArgs {
    referenceJobId? : number;
	reportEmail? : string;
}


export class KalturaReportExportResponse extends KalturaObjectBase {

    referenceJobId : number;
	reportEmail : string;

    constructor(data? : KalturaReportExportResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportExportResponse' },
				referenceJobId : { type : 'n' },
				reportEmail : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportExportResponse',KalturaReportExportResponse);
