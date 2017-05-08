
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAuditTrailListResponse } from './KalturaAuditTrailListResponse';

import { KalturaAuditTrailFilter } from './KalturaAuditTrailFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AuditTrailListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAuditTrailFilter;
	pager? : KalturaFilterPager;
}

/** 
* List audit trail objects by filter and pager
**/
export class AuditTrailListAction extends KalturaRequest<KalturaAuditTrailListResponse> {

    filter : KalturaAuditTrailFilter;
	pager : KalturaFilterPager;

    constructor(data? : AuditTrailListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAuditTrailListResponse', responseConstructor : KalturaAuditTrailListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'audit_audittrail'  },
				action : { type : 'c' , default : 'list'  },
				filter : { type : 'o'   , fallbackConstructor :  KalturaAuditTrailFilter, subType : 'KalturaAuditTrailFilter'},
				pager : { type : 'o'   , fallbackConstructor :  KalturaFilterPager, subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}
