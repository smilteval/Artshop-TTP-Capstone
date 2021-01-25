module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIAJQRJDNCHI2DOQ2YQ'),
        secretAccessKey: env('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'),
        region: 'us-east-1',
        params: {
          Bucket: 'ttp-art-store-upload-provider',
        },
      },
    },
  });