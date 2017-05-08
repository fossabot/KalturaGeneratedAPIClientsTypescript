
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConversionProfileStatus } from './KalturaConversionProfileStatus';
import { KalturaConversionProfileType } from './KalturaConversionProfileType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCropDimensions } from './KalturaCropDimensions';
import { KalturaMediaParserType } from './KalturaMediaParserType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConversionProfileArgs  extends KalturaObjectBaseArgs {
    status? : KalturaConversionProfileStatus;
	type? : KalturaConversionProfileType;
	name? : string;
	systemName? : string;
	tags? : string;
	description? : string;
	defaultEntryId? : string;
	flavorParamsIds? : string;
	isDefault? : KalturaNullableBoolean;
	cropDimensions? : KalturaCropDimensions;
	clipStart? : number;
	clipDuration? : number;
	xslTransformation? : string;
	storageProfileId? : number;
	mediaParserType? : KalturaMediaParserType;
	calculateComplexity? : KalturaNullableBoolean;
}


export class KalturaConversionProfile extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	status : KalturaConversionProfileStatus;
	type : KalturaConversionProfileType;
	name : string;
	systemName : string;
	tags : string;
	description : string;
	defaultEntryId : string;
	readonly createdAt : Date;
	flavorParamsIds : string;
	isDefault : KalturaNullableBoolean;
	readonly isPartnerDefault : boolean;
	cropDimensions : KalturaCropDimensions;
	clipStart : number;
	clipDuration : number;
	xslTransformation : string;
	storageProfileId : number;
	mediaParserType : KalturaMediaParserType;
	calculateComplexity : KalturaNullableBoolean;

    constructor(data? : KalturaConversionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConversionProfile' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				status : { type : 'es', subTypeConstructor : KalturaConversionProfileStatus, subType : 'KalturaConversionProfileStatus' },
				type : { type : 'es', subTypeConstructor : KalturaConversionProfileType, subType : 'KalturaConversionProfileType' },
				name : { type : 's' },
				systemName : { type : 's' },
				tags : { type : 's' },
				description : { type : 's' },
				defaultEntryId : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				flavorParamsIds : { type : 's' },
				isDefault : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				isPartnerDefault : { type : 'b', readOnly : true },
				cropDimensions : { type : 'o', subTypeConstructor : KalturaCropDimensions, subType : 'KalturaCropDimensions' },
				clipStart : { type : 'n' },
				clipDuration : { type : 'n' },
				xslTransformation : { type : 's' },
				storageProfileId : { type : 'n' },
				mediaParserType : { type : 'es', subTypeConstructor : KalturaMediaParserType, subType : 'KalturaMediaParserType' },
				calculateComplexity : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConversionProfile',KalturaConversionProfile);
