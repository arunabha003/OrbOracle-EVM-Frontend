import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ArrowRight, Database, Shield, Zap } from "lucide-react"
import Orb from "@/components/Orb"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-[oblique] tracking-wide" style={{ fontStyle: 'oblique 12deg' }}>
      {/* <SplashCursor /> */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div style={{ 
            width: '100vw', 
            height: '100vh', 
            position: 'absolute', 
            top: '0', 
            left: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ 
              width: 'min(90vw, 90vh)', 
              height: 'min(90vw, 90vh)', 
              maxWidth: '800px',
              maxHeight: '800px'
            }}>
              <Orb
                hoverIntensity={1.7}
                rotateOnHover={true}
                hue={300}
                forceHoverState={false}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 sm:mb-8 text-balance tracking-wide px-4" style={{ fontStyle: 'oblique 15deg' }}>
              Orb Oracle:
              <div><span className="text-primary">Token-weighted price discovery onchain</span></div>
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button asChild size="lg" className="text-lg px-8 bg-white text-black hover:bg-gray-100">
                <Link href="/create">
                  Create an Oracle
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent border-gray-600 text-gray-400 hover:bg-gray-800">
                <Link href="/explorer">Explore Live Oracles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 tracking-wide" style={{ fontStyle: 'oblique 15deg' }}>Why use Orb Oracle?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A lean frontend for exploring oracles, submitting values, and managing oracle participation directly from your wallet
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Continuous Price Feeds</CardTitle>
                <CardDescription>
                  Track the latest submitted and aggregated values from live onchain oracles without leaving the app
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Wallet-Native Actions</CardTitle>
                <CardDescription>
                  Connect a wallet to create an oracle, deposit weight tokens, submit prices, and manage withdrawals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Transparent Participation</CardTitle>
                <CardDescription>
                  Review oracle configuration, staking requirements, submission history, and participant balances in one place
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center px-4">
            <div>
              <div className="text-4xl font-medium text-primary mb-2">Create</div>
              <div className="text-muted-foreground">Launch new oracle instances</div>
            </div>
            <div>
              <div className="text-4xl font-medium text-primary mb-2">Explore</div>
              <div className="text-muted-foreground">Inspect deployed oracle contracts</div>
            </div>
            <div>
              <div className="text-4xl font-medium text-primary mb-2">Submit</div>
              <div className="text-muted-foreground">Post values and update weights</div>
            </div>
            <div>
              <div className="text-4xl font-medium text-primary mb-2">Verify</div>
              <div className="text-muted-foreground">Review history and parameters</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6 tracking-wide" style={{ fontStyle: 'oblique 15deg' }}>Ready to participate?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
              Launch an oracle, inspect live feeds, or connect your wallet to start contributing onchain values
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/create">
                Open Create Flow <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
