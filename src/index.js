// Import only symbols we wish to re-export publicly
import { signHeaders, InvalidSignatureError, URIEncodingConfig } from './internal/signature.js'
import { AWSConfig, InvalidAWSConfigError } from './internal/config.js'
import { S3Client, S3ServiceError } from './internal/s3.js'

// Re-Export public symbols
export {
    // AWS Signature V4
    signHeaders,
    InvalidSignatureError,
    URIEncodingConfig,
    // Aws Config
    AWSConfig,
    InvalidAWSConfigError,
    // S3
    S3Client,
    S3ServiceError,
}
