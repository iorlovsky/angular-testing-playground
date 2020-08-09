import * as Lint from 'tslint';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
  static FAILURE_STRING: string = 'Use of focused tests is forbidden';

  apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new Walk(sourceFile, this.getOptions()));
  }
}

class Walk extends Lint.RuleWalker {
  private readonly forbiddenExpressions: ReadonlyArray<string> = ['fdescribe', 'fit'];

  protected visitCallExpression(node: ts.CallExpression): void {
    if (this.isForbiddenExpression(node)) {
      this.addFailureAt(node.getStart(), node.getEnd() - node.getStart(), Rule.FAILURE_STRING);
    }
    super.visitCallExpression(node);
  }

  private isForbiddenExpression(node: ts.CallExpression): boolean {
    return this.forbiddenExpressions.includes(node.expression.getText());
  }
}
