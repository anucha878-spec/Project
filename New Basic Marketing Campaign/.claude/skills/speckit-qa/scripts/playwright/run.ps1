#requires -Version 5.1
<#
  run.ps1 — install Playwright (first run), execute the feature E2E suite, sync results -> CSV.
  Usage: pwsh run.ps1 -FeatureDir <specs/feat dir> -BaseUrl http://host:port [-Grep "@smoke"]
#>
param(
  [Parameter(Mandatory = $true)] [string]$FeatureDir,
  [Parameter(Mandatory = $true)] [string]$BaseUrl,
  [string]$Grep,
  [string]$Csv,
  [string]$EvidenceDir
)
$ErrorActionPreference = 'Stop'
$bundle = $PSScriptRoot
$e2e = Join-Path $FeatureDir 'e2e'
New-Item -ItemType Directory -Force -Path (Join-Path $e2e 'tests') | Out-Null

$cfg = Join-Path $e2e 'playwright.config.ts'
if (-not (Test-Path $cfg)) { Copy-Item (Join-Path $bundle 'playwright.config.ts') $cfg }
$spec = Join-Path (Join-Path $e2e 'tests') 'feature.e2e.spec.ts'
if (-not (Test-Path $spec)) { Copy-Item (Join-Path $bundle 'tests/e2e.spec.ts') $spec }

if (-not $Csv) { $Csv = (Get-ChildItem -Path $FeatureDir -Filter 'test-cases_*.csv' | Select-Object -First 1).FullName }
if (-not $EvidenceDir) { $EvidenceDir = Join-Path $FeatureDir 'evidence' }
New-Item -ItemType Directory -Force -Path $EvidenceDir | Out-Null

$env:QA_BASE_URL = $BaseUrl
$env:QA_FEATURE_DIR = $FeatureDir
$env:QA_EVIDENCE_DIR = $EvidenceDir
$env:QA_TC_CSV = $Csv

Push-Location $e2e
try {
  if (-not (Test-Path (Join-Path $e2e 'node_modules/@playwright/test'))) {
    npm init -y | Out-Null
    npm install -D '@playwright/test'
    npx playwright install chromium
  }
  $pwArgs = @('playwright', 'test', '--config', $cfg)
  if ($Grep) { $pwArgs += @('--grep', $Grep) }
  npx @pwArgs
} finally { Pop-Location }

$results = Join-Path $e2e '.artifacts/results.json'
if (Test-Path $results) { node (Join-Path $bundle 'sync-results.mjs') --results $results --csv $Csv }
else { Write-Warning "no results.json at $results — CSV not synced" }
