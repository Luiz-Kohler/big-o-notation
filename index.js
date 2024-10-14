import { constantComplexityBenchMark } from './complexities/constant.js';
import { linearComplexityBenchMark } from './complexities/linear.js';
import { logarithmicComplexityBenchMark } from './complexities/logarithmic.js';
import { logLinearComplexityBenchMark } from './complexities/log-linear.js';
import { polynomialCubicComplexityBenchMark, polynomialSquareComplexityBenchMark } from './complexities/polynomial.js';
import { exponentialComplexityBenchMark } from './complexities/exponential.js';
import { factorialComplexityBenchMark } from './complexities/factorial.js';
import { saveReport } from './common/file-manager.js'

const INPUT_SIZES = [1, 5, 10];

const benchmarks = [
    constantComplexityBenchMark,
    linearComplexityBenchMark,
    logarithmicComplexityBenchMark,
    logLinearComplexityBenchMark,
    polynomialSquareComplexityBenchMark,
    polynomialCubicComplexityBenchMark,
    exponentialComplexityBenchMark,
    factorialComplexityBenchMark
];

const response = benchmarks
    .map(benchmark => benchmark(INPUT_SIZES))
    .flat();

saveReport(response);