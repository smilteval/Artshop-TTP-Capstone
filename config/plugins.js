module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      accessKeyId: 'AKIAJQRJDNCHI2DOQ2YQ',
      secretAccessKey: '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',
      providerOptions: {
        region: 'us-east-1',
        params: {
          Bucket: 'ttp-art-store-upload-provider',
        },
      },
    },
  });

//   accessKeyId: env('AKIAJQRJDNCHI2DOQ2YQ'),
//   secretAccessKey: env('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'),
