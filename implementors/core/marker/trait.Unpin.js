(function() {var implementors = {};
implementors["actix_codec"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_codec/struct.BytesCodec.html\" title=\"struct actix_codec::BytesCodec\">BytesCodec</a>","synthetic":true,"types":["actix_codec::bcodec::BytesCodec"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_codec/struct.FramedParts.html\" title=\"struct actix_codec::FramedParts\">FramedParts</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_codec::framed::FramedParts"]},{"text":"impl&lt;'__pin, T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_codec/struct.Framed.html\" title=\"struct actix_codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__Origin&lt;'__pin, T, U&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix_codec::framed::Framed"]}];
implementors["actix_router"] = [{"text":"impl&lt;'de, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_router/struct.PathDeserializer.html\" title=\"struct actix_router::PathDeserializer\">PathDeserializer</a>&lt;'de, T&gt;","synthetic":true,"types":["actix_router::de::PathDeserializer"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_router/struct.Path.html\" title=\"struct actix_router::Path\">Path</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_router::path::Path"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_router/struct.ResourceDef.html\" title=\"struct actix_router::ResourceDef\">ResourceDef</a>","synthetic":true,"types":["actix_router::resource::ResourceDef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_router/struct.ResourceInfo.html\" title=\"struct actix_router::ResourceInfo\">ResourceInfo</a>","synthetic":true,"types":["actix_router::router::ResourceInfo"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_router/struct.Router.html\" title=\"struct actix_router::Router\">Router</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_router::router::Router"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_router/struct.RouterBuilder.html\" title=\"struct actix_router::RouterBuilder\">RouterBuilder</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_router::router::RouterBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_router/struct.Url.html\" title=\"struct actix_router::Url\">Url</a>","synthetic":true,"types":["actix_router::url::Url"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_router/struct.Quoter.html\" title=\"struct actix_router::Quoter\">Quoter</a>","synthetic":true,"types":["actix_router::url::Quoter"]}];
implementors["actix_rt"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_rt/struct.ArbiterHandle.html\" title=\"struct actix_rt::ArbiterHandle\">ArbiterHandle</a>","synthetic":true,"types":["actix_rt::arbiter::ArbiterHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_rt/struct.Arbiter.html\" title=\"struct actix_rt::Arbiter\">Arbiter</a>","synthetic":true,"types":["actix_rt::arbiter::Arbiter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_rt/struct.Runtime.html\" title=\"struct actix_rt::Runtime\">Runtime</a>","synthetic":true,"types":["actix_rt::runtime::Runtime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_rt/struct.System.html\" title=\"struct actix_rt::System\">System</a>","synthetic":true,"types":["actix_rt::system::System"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_rt/struct.SystemRunner.html\" title=\"struct actix_rt::SystemRunner\">SystemRunner</a>","synthetic":true,"types":["actix_rt::system::SystemRunner"]}];
implementors["actix_server"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_server/struct.ServerBuilder.html\" title=\"struct actix_server::ServerBuilder\">ServerBuilder</a>","synthetic":true,"types":["actix_server::builder::ServerBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_server/struct.ServiceConfig.html\" title=\"struct actix_server::ServiceConfig\">ServiceConfig</a>","synthetic":true,"types":["actix_server::config::ServiceConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_server/struct.ServiceRuntime.html\" title=\"struct actix_server::ServiceRuntime\">ServiceRuntime</a>","synthetic":true,"types":["actix_server::config::ServiceRuntime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_server/struct.Server.html\" title=\"struct actix_server::Server\">Server</a>","synthetic":true,"types":["actix_server::server::Server"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_server/struct.TestServer.html\" title=\"struct actix_server::TestServer\">TestServer</a>","synthetic":true,"types":["actix_server::test_server::TestServer"]}];
implementors["actix_service"] = [{"text":"impl&lt;Cfg, Req, Res, Err, InitErr&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_service/boxed/struct.BoxServiceFactory.html\" title=\"struct actix_service::boxed::BoxServiceFactory\">BoxServiceFactory</a>&lt;Cfg, Req, Res, Err, InitErr&gt;","synthetic":true,"types":["actix_service::boxed::BoxServiceFactory"]},{"text":"impl&lt;S, Req&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_service/struct.Pipeline.html\" title=\"struct actix_service::Pipeline\">Pipeline</a>&lt;S, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_service::pipeline::Pipeline"]},{"text":"impl&lt;SF, Req&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_service/struct.PipelineFactory.html\" title=\"struct actix_service::PipelineFactory\">PipelineFactory</a>&lt;SF, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SF: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_service::pipeline::PipelineFactory"]},{"text":"impl&lt;T, S, Req&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_service/struct.ApplyTransform.html\" title=\"struct actix_service::ApplyTransform\">ApplyTransform</a>&lt;T, S, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_service::transform::ApplyTransform"]}];
implementors["actix_tls"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/openssl/struct.TlsStream.html\" title=\"struct actix_tls::accept::openssl::TlsStream\">TlsStream</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_tls::accept::openssl::TlsStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/openssl/struct.Acceptor.html\" title=\"struct actix_tls::accept::openssl::Acceptor\">Acceptor</a>","synthetic":true,"types":["actix_tls::accept::openssl::Acceptor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/openssl/struct.AcceptorService.html\" title=\"struct actix_tls::accept::openssl::AcceptorService\">AcceptorService</a>","synthetic":true,"types":["actix_tls::accept::openssl::AcceptorService"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/openssl/struct.AcceptorServiceResponse.html\" title=\"struct actix_tls::accept::openssl::AcceptorServiceResponse\">AcceptorServiceResponse</a>&lt;T&gt;","synthetic":true,"types":["actix_tls::accept::openssl::AcceptorServiceResponse"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/rustls/struct.TlsStream.html\" title=\"struct actix_tls::accept::rustls::TlsStream\">TlsStream</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_tls::accept::rustls::TlsStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/rustls/struct.Acceptor.html\" title=\"struct actix_tls::accept::rustls::Acceptor\">Acceptor</a>","synthetic":true,"types":["actix_tls::accept::rustls::Acceptor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/rustls/struct.AcceptorService.html\" title=\"struct actix_tls::accept::rustls::AcceptorService\">AcceptorService</a>","synthetic":true,"types":["actix_tls::accept::rustls::AcceptorService"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/rustls/struct.AcceptorServiceFut.html\" title=\"struct actix_tls::accept::rustls::AcceptorServiceFut\">AcceptorServiceFut</a>&lt;T&gt;","synthetic":true,"types":["actix_tls::accept::rustls::AcceptorServiceFut"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/native_tls/struct.TlsStream.html\" title=\"struct actix_tls::accept::native_tls::TlsStream\">TlsStream</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_tls::accept::native_tls::TlsStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/native_tls/struct.Acceptor.html\" title=\"struct actix_tls::accept::native_tls::Acceptor\">Acceptor</a>","synthetic":true,"types":["actix_tls::accept::native_tls::Acceptor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/accept/native_tls/struct.NativeTlsAcceptorService.html\" title=\"struct actix_tls::accept::native_tls::NativeTlsAcceptorService\">NativeTlsAcceptorService</a>","synthetic":true,"types":["actix_tls::accept::native_tls::NativeTlsAcceptorService"]},{"text":"impl&lt;E1, E2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix_tls/accept/enum.TlsError.html\" title=\"enum actix_tls::accept::TlsError\">TlsError</a>&lt;E1, E2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_tls::accept::TlsError"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/struct.Connect.html\" title=\"struct actix_tls::connect::Connect\">Connect</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_tls::connect::connect::Connect"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_tls::connect::connect::Connection"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/struct.TcpConnectorFactory.html\" title=\"struct actix_tls::connect::TcpConnectorFactory\">TcpConnectorFactory</a>","synthetic":true,"types":["actix_tls::connect::connector::TcpConnectorFactory"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/struct.TcpConnector.html\" title=\"struct actix_tls::connect::TcpConnector\">TcpConnector</a>","synthetic":true,"types":["actix_tls::connect::connector::TcpConnector"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix_tls/connect/enum.ConnectError.html\" title=\"enum actix_tls::connect::ConnectError\">ConnectError</a>","synthetic":true,"types":["actix_tls::connect::error::ConnectError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/struct.ResolverFactory.html\" title=\"struct actix_tls::connect::ResolverFactory\">ResolverFactory</a>","synthetic":true,"types":["actix_tls::connect::resolve::ResolverFactory"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix_tls/connect/enum.Resolver.html\" title=\"enum actix_tls::connect::Resolver\">Resolver</a>","synthetic":true,"types":["actix_tls::connect::resolve::Resolver"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/struct.ConnectServiceFactory.html\" title=\"struct actix_tls::connect::ConnectServiceFactory\">ConnectServiceFactory</a>","synthetic":true,"types":["actix_tls::connect::service::ConnectServiceFactory"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/struct.ConnectService.html\" title=\"struct actix_tls::connect::ConnectService\">ConnectService</a>","synthetic":true,"types":["actix_tls::connect::service::ConnectService"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/ssl/openssl/struct.OpensslConnector.html\" title=\"struct actix_tls::connect::ssl::openssl::OpensslConnector\">OpensslConnector</a>","synthetic":true,"types":["actix_tls::connect::ssl::openssl::OpensslConnector"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/ssl/openssl/struct.OpensslConnectorService.html\" title=\"struct actix_tls::connect::ssl::openssl::OpensslConnectorService\">OpensslConnectorService</a>","synthetic":true,"types":["actix_tls::connect::ssl::openssl::OpensslConnectorService"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/ssl/openssl/struct.ConnectAsyncExt.html\" title=\"struct actix_tls::connect::ssl::openssl::ConnectAsyncExt\">ConnectAsyncExt</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_tls::connect::ssl::openssl::ConnectAsyncExt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/ssl/rustls/struct.RustlsConnector.html\" title=\"struct actix_tls::connect::ssl::rustls::RustlsConnector\">RustlsConnector</a>","synthetic":true,"types":["actix_tls::connect::ssl::rustls::RustlsConnector"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/ssl/rustls/struct.RustlsConnectorService.html\" title=\"struct actix_tls::connect::ssl::rustls::RustlsConnectorService\">RustlsConnectorService</a>","synthetic":true,"types":["actix_tls::connect::ssl::rustls::RustlsConnectorService"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"actix_tls/connect/ssl/rustls/enum.RustlsConnectorServiceFuture.html\" title=\"enum actix_tls::connect::ssl::rustls::RustlsConnectorServiceFuture\">RustlsConnectorServiceFuture</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_tls::connect::ssl::rustls::RustlsConnectorServiceFuture"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tls/connect/ssl/native_tls/struct.NativetlsConnector.html\" title=\"struct actix_tls::connect::ssl::native_tls::NativetlsConnector\">NativetlsConnector</a>","synthetic":true,"types":["actix_tls::connect::ssl::native_tls::NativetlsConnector"]}];
implementors["actix_tracing"] = [{"text":"impl&lt;S, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tracing/struct.TracingService.html\" title=\"struct actix_tracing::TracingService\">TracingService</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_tracing::TracingService"]},{"text":"impl&lt;S, U, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_tracing/struct.TracingTransform.html\" title=\"struct actix_tracing::TracingTransform\">TracingTransform</a>&lt;S, U, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["actix_tracing::TracingTransform"]}];
implementors["actix_utils"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_utils/counter/struct.Counter.html\" title=\"struct actix_utils::counter::Counter\">Counter</a>","synthetic":true,"types":["actix_utils::counter::Counter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_utils/counter/struct.CounterGuard.html\" title=\"struct actix_utils::counter::CounterGuard\">CounterGuard</a>","synthetic":false,"types":["actix_utils::counter::CounterGuard"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_utils/future/struct.PollFn.html\" title=\"struct actix_utils::future::PollFn\">PollFn</a>&lt;F&gt;","synthetic":false,"types":["actix_utils::future::poll_fn::PollFn"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"actix_utils/future/struct.Ready.html\" title=\"struct actix_utils::future::Ready\">Ready</a>&lt;T&gt;","synthetic":false,"types":["actix_utils::future::ready::Ready"]}];
implementors["bytestring"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"bytestring/struct.ByteString.html\" title=\"struct bytestring::ByteString\">ByteString</a>","synthetic":true,"types":["bytestring::ByteString"]}];
implementors["local_channel"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"local_channel/mpsc/struct.SendError.html\" title=\"struct local_channel::mpsc::SendError\">SendError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["local_channel::mpsc::SendError"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"local_channel/mpsc/struct.Sender.html\" title=\"struct local_channel::mpsc::Sender\">Sender</a>&lt;T&gt;","synthetic":false,"types":["local_channel::mpsc::Sender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"local_channel/mpsc/struct.Receiver.html\" title=\"struct local_channel::mpsc::Receiver\">Receiver</a>&lt;T&gt;","synthetic":false,"types":["local_channel::mpsc::Receiver"]}];
implementors["local_waker"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"local_waker/struct.LocalWaker.html\" title=\"struct local_waker::LocalWaker\">LocalWaker</a>","synthetic":true,"types":["local_waker::LocalWaker"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()