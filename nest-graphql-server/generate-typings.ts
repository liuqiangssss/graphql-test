import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

// 将schema文件生成ts文件
const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: true,
});
